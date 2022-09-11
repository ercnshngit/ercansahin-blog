import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useDarkMode(): [theme:"dark"|"light", setTheme: Dispatch<SetStateAction<"dark"|"light">>] {
  const [theme, setTheme]: [theme:"dark"|"light", setTheme: Dispatch<SetStateAction<"dark"|"light">>] = useState(
    (typeof window !== "undefined" ? localStorage.theme : "dark")
  )
  const colorTheme: "dark"|"light" = (theme === "dark" ? "light" : "dark")

  useEffect(()=> {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}