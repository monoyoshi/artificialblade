"use server";

import fs from "fs";
import path from "path";

import Link from "next/link";
import Image from "next/image";

import "/app/_css/news.css";

function gatherFiles(newsDir, newsQueryLimit = 9, newsOffset = 0, filesList = []) {
    // read directory
    fs.readdirSync(newsDir).reverse().forEach(selection => {
        if (filesList.length < newsQueryLimit) {
            const filePath = path.resolve(newsDir, selection);
            if (fs.statSync(filePath).isDirectory()) gatherFiles(filePath, newsQueryLimit, newsOffset, filesList);
            else if (path.extname(selection).toLowerCase() == ".json") filesList.push(filePath);
        };
    });
    return filesList;
};

function readFiles(filesList = []) {
    const pulledData = [];

    filesList.forEach((filePath) => {
        const fileStat = fs.statSync(filePath);
        const isFile = fileStat.isFile();

        if (isFile) {
            const data = JSON.parse(fs.readFileSync(filePath));

            const newsEntry = {
                "id": filePath.slice(-19, -5).replace(/[_\\]/g, ""),
                "category": data.category,
                "title": data.title,
                "timestamp": data.timestamp,
                "imagealt": data.imagealt
            };

            pulledData.push(newsEntry);
        };
    });

    return pulledData;
};

function NewsItem({ id = "00000000000", category = "Other", title = "Title", timestamp = 1629355563, imagealt = "" }) {
        const tsconvert = new Date(timestamp*1000);
        const timezone = tsconvert.getTimezoneOffset()/0.6;
        const timezoneText = String(Math.abs(timezone)).padStart(4, "0");
        const tzText = `${timezoneText.substring(0, 2)}:${String(parseInt(timezoneText.substring(2) / 100 * 60)).padStart(2, "0")}`;

        const timestampobject = `${tsconvert.getFullYear()}/${String(tsconvert.getMonth()+1).padStart(2, "0")}/${String(tsconvert.getDate()).padStart(2, "0")} ${String(tsconvert.getHours()).padStart(2, "0")}:${String(tsconvert.getMinutes()).padStart(2, "0")} UTC${timezone == 0 ? "" : timezone < 0 ? "+" : "-"}${timezone == 0 ? "" : tzText}`;

    let imgobject = imagealt.length > 0;
    if (imgobject) {
        const idParts = {
            "year": id.substring(0, 4),
            "month": id.substring(4, 6),
            "day": id.substring(6, 8),
            "id": id.substring(8, 11)
        };

        imgobject = (
            <div className="nemrhs">
                <Image src={`/news/${idParts.year}/${idParts.month}/${idParts.day}_${idParts.id}.png`} width={128} height={72} alt={imagealt} />
            </div>
        );
    };

    return (
        <Link className="newsentry" href={`/news/${id}`}>
            <div className={`jersey15 necategory ${category}`} />
            <div className="nemain">
                <div className="nemlhs" style={{width: imgobject ? "70%" : "100%"}}>
                    <div>{title}</div>
                    <div>{timestampobject}</div>
                </div>
                {imgobject ? imgobject : null}
            </div>
        </Link>
    );
};

async function NewsList({ news = {} }) {
    const newsList = Object.keys(news).map((key) => [key, news[key]]);

    if (newsList.length > 0) {
        return (
            newsList.map((s) => (
                <NewsItem id={s[1].id} category={s[1].category} title={s[1].title} timestamp={s[1].timestamp} imagealt={s[1].imagealt} key={s[0]} />
            ))
        );
    }
    else {
        return (
            <p>there's nothing here...</p>
        );
    };
};

export async function NewsWidget({ toggleCat = true, toggleNav = true }) {
    let pulledNews = readFiles(gatherFiles(path.join(process.cwd(), `/app/_news/`)));

    let catSection = null;
    if (toggleCat) {
        catSection = (
            <div className="column-50 newscat">
                <button>All</button>
                <button>Events/Schedules</button>
                <button>Tech Issues</button>
                <button>Version Updates</button>
            </div>
        );
    };

    let navSection = null;
    if (toggleNav) {
        navSection = (
            <div className="newsnav">
                <button className="l" />
                <button className="r" />
            </div>
        );
    };

    return (
        <div className="row" id="news">
            {catSection}

            <div className={`column-${toggleCat ? "50" : "100"} nrhs`}>
                <div className="newsbox">
                    <NewsList news={pulledNews} />
                </div>

                {navSection}
            </div>
        </div>
    )
}

export default async function NewsPage() {
    return (
        <section className="borderless fullpage" style={{background: "url(/halftone/llgray.svg) bottom right no-repeat, var(--white)"}}>
            <NewsWidget />
        </section>
    );
};