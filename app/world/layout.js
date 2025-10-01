"use client";

import Link from "next/link";

import "/app/_css/world.css";

import { PageHeader } from "/app/layout.js";

import WorldIcon from "/public/icon/world.svg";

export function WorldNav({ active = null }) {
    return (
        <div id="worldstories">
            <Link href="/world/overview" className={`button ${active == "overview" ? "active" : ""}`}>Overview</Link>
            <Link href="/world/dragon1" className={`button ${active == "dragon1" ? "active" : ""}`}>One-Sided Battle: Part One</Link>
            <Link href="/world/dragon2" className={`button ${active == "dragon2" ? "active" : ""}`}>One-Sided Battle: Part Two</Link>
            <Link href="/world/cafe" className={`button ${active == "cafe" ? "active" : ""}`}>Dragon's Ground</Link>
        </div>
    )
}

export default function WorldLayout({ children }) {
    return (
        <>
            <PageHeader icon={WorldIcon} title="WORLD" />

            {children}
        </>
    );
};