import Image from "next/image";

import "/app/_css/world.css";

import { HRBreak } from "/app/layout.js";
import { WorldNav } from "/app/world/layout.js";

export async function generateMetadata({ params }) {
    return {
        title: "Dragon's Ground | World | ARTIFICIAL BLADE | bladewyrm.dev"
    };
};

export default function OverviewPage() {    
    return (
        <section className="borderless fullpage" style={{backgroundColor: "var(--dddgray)", color: "var(--white)"}}>
            <div className="row">
                <div className="column-65">
                    <div className="hrheader br-bottom">
                        <div className="h1 jersey15">Dragon's Ground</div>
                        <div className="hr" style={{borderColor: "var(--white)"}} />
                    </div>

                    <p>This content has not been unlocked yet.</p>
                </div>
                <div className="column-35" />
            </div>
            <div className="row" style={{paddingTop: "64px"}}>
                <div className="column-100">
                    <WorldNav active="cafe" />
                </div>
            </div>
        </section>
    );
};