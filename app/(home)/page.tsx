"use client";
import { inView } from "framer-motion";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import { RxCheck } from "react-icons/rx";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden overflow-y-hidden">
      <section className="absolute scale-[1.5] top-[72vh] left-[23vw] flex items-end justify-end flex-col">
        <span className="flex flex-col w-full h-full items-end">
          <h1 className="text-4xl font-extrabold text-zinc-50">Welcome!</h1>
          <Link
            href="/main"
            className="absolute -left-8 top-1 bg-zinc-50/5 hover:bg-zinc-50/10 text-zinc-50 hover:text-rose-600 p-2 rounded-lg"
          >
            <RxCheck size={16} />
          </Link>
        </span>
        <span className="flex items-end">
          <h2 className="text-md font-light tracking-tight  text-rose-400">
            @HristoKutsarov
          </h2>

          <h2 className="text-md font-semibold text-zinc-200">.devblog</h2>
        </span>
      </section>

      <Suspense
        fallback={<span className="flex w-full h-full bg-rose-300">back</span>}
      >
        <div className="w-screen h-screen">
          <Spline scene="https://prod.spline.design/UkiDiidAU98z8kPW/scene.splinecode" />
        </div>
      </Suspense>

      <motion.section className="flex w-full h-screen bg-zinc-400"></motion.section>
    </main>
  );
}
