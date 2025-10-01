"use client";

import Link from "next/link";

import "/app/_css/character.css";

import { PageHeader } from "/app/layout.js";

import CharacterIcon from "/public/icon/character.svg";

export function ColorDisplay({value = "#3775B4", text = value, blacktext = false}) {
    return (
        <span style={{padding: "0 4px", backgroundColor: value, color: blacktext ? "var(--black)" : "var(--white)"}}>{text}</span>
    )
}

export function CharacterNav({ active = null }) {
    return (
        <div id="characterbios">
            <Link href="/character/ren" className={`button ${active == "overview" ? "active" : ""}`}>REN</Link>
            <Link href="/character/razordrake" className={`button ${active == "dragon1" ? "active" : ""}`}>Razor Drake</Link>
        </div>
    )
}

export default function CharacterLayout({ children }) {
    return (
        <>
            <PageHeader icon={CharacterIcon} title="CHARACTER" />

            {children}
        </>
    );
};