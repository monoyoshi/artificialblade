import "/app/_css/world.css";

import { WorldNav } from "/app/world/layout.js";

export async function generateMetadata({ params }) {
    return {
        title: "Overview | World | ARTIFICIAL BLADE | bladewyrm.dev"
    };
};

export default function OverviewPage() {    
    return (
        <section className="borderless fullpage" style={{backgroundColor: "var(--dddgray)", color: "var(--white)"}}>
            <div className="row">
                <div className="column-65">
                    <div className="hrheader br-bottom">
                        <div className="h1 jersey15">Overview</div>
                        <div className="hr" style={{borderColor: "var(--white)"}} />
                    </div>

                    <p className="h2 italics br-bottom">"Wanna know what happens when the beast inside takes over? Well, here's your answer."</p>

                    <p>A dragon stripped of its true power.</p>
                    <p>A human robbed of his own future.</p>
                    <p className="br-bottom">From the ravaged lands of a broken world rises a monstrosity whose existence threatens all.</p>

                    <p>Two paths that never should've crossed, they are a violation of natural law—an insult to life itself.</p>
                    <p className="br-bottom">Mankind fears their grotesque appearance while fellow dragons refuse to acknowledge them.</p>

                    <p>Yet, even in this world that rejects their existence, they still choose to pick up their blade.</p>
                    <p>In the past, neither man nor wyrm felt like they had a purpose.</p>
                    <p className="br-bottom">Now, they must balance the roles of both dragon and human and carve a path to the future themselves.</p>

                    <p className="br-bottom">Known by some as the cool but eccentric sword-obsessed adventurer, they strive to make their voice heard once and for all.</p>

                    <p>One day, they set out to do just that—and thus begins the legend of the Bladewyrm, the artificial blade.</p>
                </div>
                <div className="column-35" />
            </div>
            <div className="row" style={{paddingTop: "64px"}}>
                <div className="column-100">
                    <WorldNav active="overview" />
                </div>
            </div>
        </section>
    );
};