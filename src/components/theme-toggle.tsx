"use client";

import { useTheme } from "next-themes";
import { Theme } from "./theme-provider";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <div>
      <Button
        variant="link"
        size="icon"
        className=" hidden dark:flex"
        onClick={() => {
          setTheme(Theme.light);
        }}
      >
        <Sun size={16} />
      </Button>

      <Button
        variant="link"
        size="icon"
        className=" flex dark:hidden"
        onClick={() => {
          setTheme(Theme.dark);
        }}
      >
        <Moon size={16} />
      </Button>
    </div>
  );
}
