"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Logo({ className }: { className?: string }) {
  const [flap, setFlap] = useState(true);
  const text = flap ? "trip" : "pirt";

  return (
    <>
      <motion.div
        className={clsx(
          "inline-block h-[72px] w-[72px] cursor-pointer",
          className,
        )}
        whileHover={"hover"}
        whileFocus={"hover"}
        initial={"initial"}
        animate="animate"
      >
        <motion.div
          variants={{
            initial: {
              rotateY: 360,
            },
            animate: {
              rotateY: 0,
            },
            hover: {
              rotateY: 360,
            },
          }}
          onUpdate={(latest) => {
            setFlap((latest.rotateY as number) >= 270);
          }}
          transition={{
            duration: 1.5,
            type: "spring",
          }}
          className="inline-block h-[72px] w-[72px] rounded-[2px] bg-foreground"
        >
          <main className=" flex h-full items-center justify-center text-[22px] font-black uppercase leading-none text-background">
            <div className=" mt-1.5">
              <p className="text-right tracking-[3px]">{text}</p>
              <p className="pr-[3px] text-right text-[20px] tracking-[2px]">
                or
              </p>
            </div>
          </main>
        </motion.div>
      </motion.div>
    </>
  );
}
