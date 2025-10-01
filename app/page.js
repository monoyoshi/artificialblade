"use server";

import Image from "next/image";

import { SplashScreen } from "/app/layout.js";
import NewsIcon from "/public/icon/news.svg";

import { NewsWidget } from "/app/news/page.js";

export async function generateMetadata({ params }) {
    return {
        title: "ARTIFICIAL BLADE | bladewyrm.dev"
    };
};

export default async function Home() {    
    return (
        <>
            <SplashScreen />

            <section className="borderless fullpage" style={{background: "url(/tile/normal.svg)", backgroundSize: "32px"}}>
                <div className="row" style={{paddingBottom: "32px"}}>
                    <div className="column-100">
                        <div className="hrheader">
                            <Image src={NewsIcon} alt="News icon" />
                            <div className="h1 jersey15">LATEST NEWS</div>
                            <div className="hr" style={{borderColor: "var(--black)"}} />
                        </div>
                    </div>
                </div>
                <NewsWidget toggleCat={true} toggleNav={false} />
            </section>

            <section style={{padding: "64px 0 80px", background: "url(/halftone/dddgray.svg) bottom right no-repeat, var(--a_b0g5)", color: "var(--white)"}}>
                <div className="row">
                    <div className="column-100 center">
                        <div style={{maxWidth: "512px", textAlign: "center"}}>
                            <p>A dragon stripped of its true power.</p>
                            <p>A human robbed of his own future.</p>
                            <p className="br-bottom">From the ravaged lands of a broken world, a monstrosity rises whose existence threatens all.</p>

                            <p className="bold">This is the legend of the Bladewyrm, the artificial blade.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};