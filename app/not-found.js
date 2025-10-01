import Image from "next/image";

export async function generateMetadata({ params }) {
    return {
        title: "ARTIFICIAL BLADE | bladewyrm.dev"
    };
};

export default function NotFound() {
    return (
        <section className="borderless fullpage" style={{height: "100vh", minHeight: "352px", background: "url(/tile/dark.svg)", backgroundSize: "16px", color: "var(--white)"}}>
            <div className="row">
                <div className="column-100 center">
                    <div className="h1 jersey15 br-bottom">ERROR 404: PAGE NOT FOUND</div>
                    <p className="italics br-bottom">"...and where do <b>you</b> think you're going?"</p>
                </div>
            </div>
        </section>
    );
};