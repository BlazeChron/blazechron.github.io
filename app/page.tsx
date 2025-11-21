'use client';
import Image from "next/image";
import shimaenaga from "../assets/shimaenaga.png";
import github from "../assets/github-mark.svg";
import itch from "../assets/itchio-textless-black.svg";
import Link from 'next/link';
import ChainScene from './threejs/chains'
import { useState } from 'react';

export default function Home() {
  const [waiting, setWaiting] = useState(true);

  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{visibility: waiting ? "hidden" : "visible"}}>
    <ChainScene onReady={() => {setWaiting(false);
    console.log("wait done");}}/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            src={shimaenaga}
            alt="shimaenaga"
            width={180}
            priority
            style={{
              alignSelf: 'center',
              borderRadius: 20,
              transform: 'rotate(0deg)',
              height: 'auto'
            }}
          />
        <ul className="list-inside list-decimal max-w-md mx-auto text-sm text-center font-[family-name:var(--font-geist-mono)]">
            BlazeChron&apos;s site WIP using next.js
        </ul>
        <ul className="list-inside list-decimal max-w-md mx-auto text-sm text-center font-[family-name:var(--font-geist-mono)]">
            Creating a single player card game
        </ul>
        <ul className="list-inside list-decimal max-w-md mx-auto text-sm text-center font-[family-name:var(--font-geist-mono)]">
          <Link href="/blog"><u>Blog</u></Link>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/BlazeChron"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={github}
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://blazechron.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={itch}
            alt="Window icon"
            width={16}
            height={16}
          />
          itch
        </a>
      </footer>
    </div>
  );
}
