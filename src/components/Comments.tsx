"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// https://giscus.app/zh-CN
const config = {
  repo: "pirtor/blog",
  repoid: "R_kgDOLTKxMQ",
  category: "Announcements",
  categoryid: "DIC_kwDOLTKxMc4CdSjS",
  mapping: "pathname",
  inputposition: "bottom",
  lang: "en",
};

export default function Comments() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    import("giscus").then(() => setMounted(true));
  }, []);

  return (
    <>
      {mounted && (
        // @ts-ignore
        <giscus-widget
          id="comments"
          reactionsenabled="1"
          emitmetadata="0"
          // loading="lazy"
          theme={theme === "light" ? "noborder_light" : "noborder_dark"}
          {...config}
        />
      )}
    </>
  );
}
