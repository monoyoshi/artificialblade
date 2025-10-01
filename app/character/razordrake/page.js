import Image from "next/image";

import "/app/_css/world.css";

import { HRBreak } from "/app/layout.js";
import { CharacterNav } from "/app/character/layout.js";

import Portrait from "/public/character/razordrake/portrait.png";

export async function generateMetadata({ params }) {
    return {
        title: "Razor Drake | Characters | ARTIFICIAL BLADE | bladewyrm.dev"
    };
};

export default function RenPage() {    
    return (
        <section className="borderless fullpage" style={{background: "url(/halftone/ddgray.svg) bottom right no-repeat, var(--dddgray)", color: "var(--white)"}}>
            <div className="row">
                <div className="column-100">
                    <p className="h3 jersey15">Dagger Buddy</p>
                    <div className="hrheader br-bottom">
                        <div className="h1 jersey15 camo">Razor Drake</div>
                        <div className="hr right" style={{borderColor: "var(--white)"}} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column-50 charactercolumn-lhs">
                    <Image src={Portrait} alt="portrait" className="br-bottom" style={{width: "416px"}} />

                    <button className="br-bottom">Base</button>

                    <p className="textcenter h2 italics br-bottom">R...roar?</p>
                </div>
                <div className="column-50 charactercolumn-rhs">
                    <p>An artificial dragon hatchling created through dubious means. Curious about the world around them, they follow their progenitor around. REN gets cuteness aggression from them and lets them hang out at the Dragon's Ground.</p>

                    <HRBreak pTop="32px" bColor="var(--white)"/>

                    <table>
                        <tbody>
                            <tr>
                                <th>SPECIES</th>
                                <td>Dragon</td>
                            </tr>
                            <tr>
                                <th>RESIDENCE</th>
                                <td>Dragon's Ground</td>
                            </tr>
                            <tr className="tablebreak"><td>&#8203;</td></tr>
                            <tr>
                                <th>HEIGHT</th>
                                <td>~1'2" (36.9 cm)</td>
                            </tr>
                            <tr>
                                <th>WEIGHT</th>
                                <td>~14.3 lb (6.5 kg)</td>
                            </tr>
                            <tr>
                                <th>EYE COLOR</th>
                                <td>Yellow</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row" style={{paddingTop: "64px"}}>
                <div className="column-100">
                    <CharacterNav active="razordrake" />
                </div>
            </div>
        </section>
    );
};