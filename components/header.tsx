import useDarkMode from 'hooks/useDarkMode';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

export default function Header() {
  const [colorTheme, setTheme] = useDarkMode();
  const [menuVisibility, setMenuVisibility] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisibility((prevMenuVisibility) => !prevMenuVisibility);
  };

  return (
    <>
      <div className="block w-screen h-2 mb-4 bg-gradient-to-r from-indigo-700 via-cyan-500 to-purple-600 "></div>

      <div className="flex items-center justify-between px-4 mb-4 md:justify-center">
        <div className="dark:text-white md:hidden md:static font-xl">
          <svg
            onClick={toggleMenuVisibility}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <nav
          className={
            (menuVisibility ? 'absolute' : 'hidden') +
            ' bottom-0 left-0 top-16 right-0 z-30 p-3 bg-indigo-900 md:static md:inline-block md:bg-transparent'
          }
        >
          <ul className="flex flex-col text-2xl font-bold md:gap-6 md:text-lg md:justify-center md:flex-row flex-around dark:text-white">
            <li className="p-4 border-b-2 border-teal-500 md:p-0 md:border-b-0 transition-on click-effect dark:hover:text-indigo-300">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="p-4 border-b-2 border-fuchsia-500 md:p-0 md:border-b-0 transition-on click-effect dark:hover:text-indigo-300">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="p-4 border-b-2 border-cyan-500 md:p-0 md:border-b-0 transition-on click-effect dark:hover:text-indigo-300">
              <Link href="/snippets">
                <a>Snippets</a>
              </Link>
            </li>
            <li className="p-4 border-b-2 border-pink-400 md:p-0 md:border-b-0 transition-on click-effect dark:hover:text-indigo-300">
              <Link href="/cheatsheets">
                <a>Cheatsheets</a>
              </Link>
            </li>
            <li className="p-4 border-b-2 border-violet-500 md:p-0 md:border-b-0 transition-on click-effect dark:hover:text-indigo-300">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-2xl font-bold md:ml-3 dark:text-white transition-on click-effect">
          {colorTheme === 'light' ? (
            <svg
              onClick={() => setTheme('light')}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme('dark')}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
