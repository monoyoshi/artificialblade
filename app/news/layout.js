import "/app/_css/news.css";

import { PageHeader } from "/app/layout.js";

import NewsIcon from "/public/icon/news.svg";

export async function generateMetadata({ params }) {
    return {
        title: "News | ARTIFICIAL BLADE | bladewyrm.dev"
    };
};

export default function NewsLayout({ children }) {
    return (
        <>
            <PageHeader icon={NewsIcon} title="NEWS" />

            {children}
        </>
    );
};