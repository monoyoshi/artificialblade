"use client";

import { useRef, useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import SiteLogo from "/public/logo.png";

import "/app/_css/colors.css";

import { RocknRoll_One, Jersey_15, DotGothic16 } from "next/font/google";
import "/app/_css/fonts.css";

const rocknrollone = RocknRoll_One({
    subsets: ["latin", "latin-ext"],
    weight: "400",
    variable: "--font-rocknroll_one"
});

const jersey15 = Jersey_15({
    subsets: ["latin", "latin-ext"],
    weight: "400",
    variable: "--font-jersey_15"
});

const hjpfont = DotGothic16({
    subsets: ["latin", "latin-ext", "cyrillic"],
    weight: "400",
    variable: "--font-dotgothic16"
});

import "/app/_css/styles.css";

import HBOpen from "/public/hamburger/yesburger.svg";
import HBClose from "/public/hamburger/noburger.svg";
import PlayNow from "/public/icon/play.svg";

import BladewyrmLogo from "/public/logo_bladewyrm.svg";

export function HRBreak({ centered = true, width = "64px", pTop = "0", pBottom = pTop, bThick = "2px", bColor = "var(--black)" }) {
    return (
        <div className="hrbreak" style={{justifyContent: centered ? "center" : "flex-start", paddingTop: pTop, paddingBottom: pBottom}}>
            <div className="hr" style={{width: width, borderTop: `${bThick} solid ${bColor}`}} />
        </div>
    );
};

export function VRBreak({ height = "64px", pLeft = "0", pRight = pLeft, bThick = "2px", bColor = "var(--black)" }) {
    return (
        <div className="vr" style={{height: height, paddingLeft: pLeft, paddingRight: pRight, borderRight: `${bThick} solid ${bColor}`}} />
    );
};

export function PageHeader({ icon = null, title = ""}) {
    return (
        <div id="pageheader">
            <button onClick={() => {window.scrollTo(0, 0)}}>
                <Image src={icon} alt={`${title} icon`} />
                <span className="jersey15 h1">{title}</span>
            </button>
        </div>
    );
};

export function SplashScreen() {
    const [showScrollTop, setScrollTop] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        if (showScrollTop == "contract") document.body.style.overflow = "visible";
        else document.body.style.overflow = "hidden";
    });

    return (
        <section className={showScrollTop} id="splashscreen">
            <Image src={SiteLogo} alt="Site Logo" />
            <button className={`playbutton ${showScrollTop}`} onClick={() => {setScrollTop("contract")}}>
                <Image src={PlayNow} alt="PLAY NOW!" style={{height: "20px", padding: "0"}} />
            </button>
        </section>
    );
};

function NavbarHeader() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleHBM(state = !isOpen) {
        setIsOpen(state);

        if (state) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
    };

    return (
        <>
            <div className={isOpen ? "active" : null} onClick={() => {toggleHBM(false)}} id="hbmshadow" />
            <header>
                <nav>
                    <div id="navmain">
                        <Link href="/" className="cool">HOME</Link>
                        <VRBreak height="24px" bColor="var(--a_b1g4)" />
                        <Link href="/news" className="cool">NEWS</Link>
                        <VRBreak height="24px" bColor="var(--a_b1g4)" />
                        <Link href="/world/overview" className="cool">WORLD</Link>
                        <VRBreak height="24px" bColor="var(--a_b1g4)" />
                        <Link href="/character/ren" className="cool">CHARACTER</Link>
                        <VRBreak height="24px" bColor="var(--a_b1g4)" />
                        <Link href="/media" className="cool">MEDIA</Link>
                    </div>
                    <div id="navbg" />
                </nav>

                <div id="burgerbox">
                    <button onClick={() => {toggleHBM()}}>
                        <Image src={isOpen ? HBClose : HBOpen} alt="hbmenu" style={{width: "32px"}} />
                    </button>
                </div>

                <div className={isOpen ? "active" : null} id="hbmenu">
                    <Link href="/" onClick={() => {toggleHBM(false)}} className="camo">HOME</Link>
                    <Link href="/news" onClick={() => {toggleHBM(false)}} className="camo">NEWS</Link>
                    <Link href="/world/overview" onClick={() => {toggleHBM(false)}} className="camo">WORLD</Link>
                    <Link href="/character/ren" onClick={() => {toggleHBM(false)}} className="camo">CHARACTER</Link>
                    <Link href="/media" onClick={() => {toggleHBM(false)}} className="camo">MEDIA</Link>
                </div>
            </header>
        </>
    );
};

export default function RootLayout({ children }) {
    const [showPageScrollTop, setPageScrollTop] = useState("stbdisabled");
    const refScrollUp = useRef(0);

    const scrollHandler = () => {
        if (window.scrollY > 0) setPageScrollTop("stbenabled");
        else setPageScrollTop("stbdisabled");
    };

    const handleScrollUp = () => {
        refScrollUp.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(handleScrollUp, []);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    });

    return (
        <html lang="en" className={`${rocknrollone.variable} ${jersey15.variable} ${hjpfont.variable}`}>
        <body>
            <NavbarHeader />

            <button className="scrolltopbutton" id={showPageScrollTop} onClick={handleScrollUp} />

            <article ref={refScrollUp}>
                <main>
                    <footer>
                        <div>
                            <p>made with love and pure hyperfixation by <b>kyu(ren)</b></p>
                            <Image src="https://cdn.bladewyrm.dev/images/kyurem/sprite-animated_kyurem.png" width={32} height={32} alt=":)" unoptimized style={{height: "32px"}} />

                        </div>
                    </footer>

                    {children}

                    <section id="socials">
                        <div className="row">
                            <div className="column-100" id="socialist">
                                <Link href="https://twitter.com/rtificialblade" target="_blank" rel="noopener noreferrer" className="cool">TWITTER</Link>
                                <VRBreak height="2px" bColor="var(--white)" />
                                <Link href="https://www.twitch.tv/bladewyrm" target="_blank" rel="noopener noreferrer" className="cool">TWITCH</Link>
                                <VRBreak height="2px" bColor="var(--white)" />
                                <Link href="https://www.youtube.com/@artificialblade" target="_blank" rel="noopener noreferrer" className="cool">YOUTUBE</Link>
                                <VRBreak height="2px" bColor="var(--white)" />
                                <Link href="https://github.com/monoyoshi" target="_blank" rel="noopener noreferrer" className="cool">GITHUB</Link>
                                <VRBreak height="2px" bColor="var(--white)" />
                                <Link href="https://ko-fi.com/bladewyrm" target="_blank" rel="noopener noreferrer" className="cool">KO-FI</Link>
                                <VRBreak height="2px" bColor="var(--white)" />
                                <Link href="https://bsky.app/profile/artificialblade.bladewyrm.dev" target="_blank" rel="noopener noreferrer" className="cool">BLUESKY</Link>
                                <VRBreak height="2px" bColor="var(--white)" />
                                <Link href="https://artificialblade.tumblr.com" target="_blank" rel="noopener noreferrer" className="cool">TUMBLR</Link>
                            </div>
                        </div>
                    </section>

                    <section id="mainfooter">
                        <div className="row">
                            <div className="column-75 aflhs">
                                <p>Content still in development. Free-to-start; optional purchases available. Persistent Internet connection required. Data charges may apply.</p>
                                <p>kyu(ren) @ bladewyrm</p>
                            </div>

                            <div className="column-25 afrhs">
                                <Link href="https://bladewyrm.dev" target="_blank" rel="noopener noreferrer">
                                    <Image src={BladewyrmLogo} alt="bladewyrm Logo" style={{height: "64px"}} />
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            </article>
        </body>
        </html>
    );
};