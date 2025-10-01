import Image from "next/image";

import "/app/_css/world.css";

import { HRBreak } from "/app/layout.js";
import { ColorDisplay, CharacterNav } from "/app/character/layout.js";

import Portrait from "/public/character/ren/portrait.png";

export async function generateMetadata({ params }) {
    return {
        title: "REN | Characters | ARTIFICIAL BLADE | bladewyrm.dev"
    };
};

export default function RenPage() {    
    return (
        <section className="borderless fullpage" style={{background: "url(/halftone/ddgray.svg) bottom right no-repeat, var(--dddgray)", color: "var(--white)"}}>
            <div className="row">
                <div className="column-100">
                    <div className="h3 jersey15">Artificial Blade</div>
                    <div className="hrheader br-bottom">
                        <div className="h1 jersey15">REN</div>
                        <div className="hr" style={{borderColor: "var(--white)"}} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column-50 charactercolumn-lhs">
                    <Image src={Portrait} alt="portrait" className="br-bottom" style={{width: "416px"}} />

                    <button className="br-bottom">Base</button>

                    <p className="textcenter h2 italics br-bottom">Wanna know what happens when the beast inside takes over? Well, here's your answer.</p>
                </div>
                <div className="column-50 charactercolumn-rhs">
                    <p>A strange but otherwise pretty chill individual who blurs the line between dragon and human. Even though they wish to get along with everyone, others are unable to look past the terrible monstrosity that lies within. They juggle their guild duties with running a café.</p>

                    <HRBreak pTop="32px" bColor="var(--white)"/>

                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>SPECIES</th>
                                    <td>Human-Dragon fusion</td>
                                </tr>
                                <tr>
                                    <th>PRONOUNS</th>
                                    <td>
                                        <p>He/him</p>
                                        <p>They/them</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>BIRTHDAY</th>
                                    <td>August 19 (Leo)</td>
                                </tr>
                                <tr>
                                    <th>AGE</th>
                                    <td>"Older than you"</td>
                                </tr>
                                <tr>
                                    <th>RESIDENCE</th>
                                    <td>Dragon's Ground</td>
                                </tr>
                                <tr>
                                    <th>COLOR</th>
                                    <td>
                                        <p><ColorDisplay value="#3775B4" /></p>
                                        <p><ColorDisplay value="#2D3646" /></p>
                                    </td>
                                </tr>
                                <tr className="tablebreak"><td>&#8203;</td></tr>
                                <tr>
                                    <th>HEIGHT</th>
                                    <td>5'9" without horns (176 cm)</td>
                                </tr>
                                <tr>
                                    <th>EYE COLOR</th>
                                    <td>Green (default)</td>
                                </tr>
                                <tr>
                                    <th>HAIR COLOR</th>
                                    <td>Very dark blue</td>
                                </tr>
                                <tr>
                                    <th>HANDEDNESS</th>
                                    <td>Ambidextrous</td>
                                </tr>
                                <tr>
                                    <th>BLOOD TYPE</th>
                                    <td>AB</td>
                                </tr>
                                <tr className="tablebreak"><td>&#8203;</td></tr>
                                <tr>
                                    <th>LIKES</th>
                                    <td>
                                        <p>Anything with an edge</p>
                                        <p>The skies</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>DISLIKES</th>
                                    <td>
                                        <p>Snow and ice</p>
                                        <p>Loud noises</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>FAVORITE FOOD</th>
                                    <td>Bread</td>
                                </tr>
                                <tr>
                                    <th>HOBBIES</th>
                                    <td>
                                        <p>Observing</p>
                                        <p>Piano (listening)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>TALENTS</th>
                                    <td>
                                        <p>Staring contests</p>
                                        <p>Tech support</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "64px"}}>
                <div className="column-100">
                    <CharacterNav active="ren" />
                </div>
            </div>
        </section>
    );
};