"use client";

import Logo from "@/components/logo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Logo className=" mb-7" />

      <main>
        <section className=" leading-relaxed text-primary">
          <p className=" mb-2">
            Hey, I am Pirtor
            <motion.span
              className=" mx-1 inline-block cursor-pointer text-xl"
              whileHover={{
                rotate: [0, 20, -20, 20, -20, 0],
              }}
            >
              👋
            </motion.span>
            , currently working at Alibaba as a frontend developer.
          </p>
          <p className=" mb-2">
            I love coding and design, I enjoy trying out new technologies that
            are developer-friendly.
          </p>
          <p className=" mb-2">
            <span>Since memory is unreliable, I sometimes </span>

            <Link href="/blog">
              <motion.span
                initial={{
                  backgroundPositionY: "16px",
                }}
                whileHover={{
                  backgroundPositionY: "20px",
                }}
                className=" bg-underline inline-block cursor-pointer bg-contain bg-left-bottom bg-no-repeat py-2 pl-1"
              >
                write things down.
              </motion.span>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
