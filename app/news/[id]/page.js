"use server";

import fs from "fs";
import path from "path";

import Link from "next/link";

import { HRBreak } from "/app/layout.js";

export default async function NewsArticle({ params }) {
    const { id } = await params;

    try {
        const newsID = {
            year: id.substring(0, 4),
            month: id.substring(4, 6),
            day: id.substring(6, 8),
            increment: id.substring(8, 11)
        };

        const filePath = `${newsID.year}/${newsID.month}/${newsID.day}_${newsID.increment}`
        const file = path.join(process.cwd(), `/app/_news/${filePath}.json`);
        const data = JSON.parse(fs.readFileSync(file));
        const { default: NewsContent } = await import(`@/app/_news/${filePath}.mdx`);

        const tsconvert = new Date(data.timestamp*1000);
        const timezone = tsconvert.getTimezoneOffset()/0.6;
        const timezoneText = String(Math.abs(timezone)).padStart(4, "0");
        const tzText = `${timezoneText.substring(0, 2)}:${String(parseInt(timezoneText.substring(2) / 100 * 60)).padStart(2, "0")}`;

        const timestampobject = `${tsconvert.getFullYear()}/${String(tsconvert.getMonth()+1).padStart(2, "0")}/${String(tsconvert.getDate()).padStart(2, "0")} ${String(tsconvert.getHours()).padStart(2, "0")}:${String(tsconvert.getMinutes()).padStart(2, "0")} UTC${timezone == 0 ? "" : timezone < 0 ? "+" : "-"}${timezone == 0 ? "" : tzText}`;

        return (
            <section className="borderless fullpage" style={{background: "url(/halftone/llgray.svg) bottom right no-repeat, var(--white)"}}>
                <div className="row">
                    <div className="column-100">
                        <div>
                            <span className={data.category} id="nacategory" />
                            <span className="jersey15 h2" id="natitle">{data.title}</span>
                        </div>
                        <HRBreak width="100%" pTop="8px" />
                        <div className="italics" id="natimestamp">Posted on {timestampobject}</div>
                        <NewsContent />
                    </div>
                </div>
                <div className="row">
                    <div className="column-100 center">
                        <HRBreak pTop="64px" pBottom="32px" />
                        <Link href="/news" className="button" style={{width: "256px"}}>NEWS HOME</Link>
                    </div>
                </div>
            </section>
        );
    } catch (e) {
        return (
            <>
            <section className="borderless fullpage" style={{background: "url(/tile/dark.svg)", backgroundSize: "32px", color: "var(--white)"}}>
                <div className="row">
                    <div className="column-100 center">
                        <div className="h1 jersey15 br-bottom">ERROR 404: PAGE NOT FOUND</div>
                        <p className="italics">"...and where do <b>you</b> think you're going?"</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column-100 center">
                        <HRBreak pTop="32px" bColor="var(--white)" />
                        <Link href="/news" className="button" style={{width: "256px"}}>NEWS HOME</Link>
                    </div>
                </div>
            </section>
            </>
        );
    };
};