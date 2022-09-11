import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="block h-2 mb-4 bg-indigo-900"></div>

      <nav className="flex justify-center">
        <ul className="flex justify-between font-bold gap-7 dark:text-white">
          <li className="transition-on click-effect dark:hover:text-indigo-300">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="transition-on click-effect dark:hover:text-indigo-300">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="transition-on click-effect dark:hover:text-indigo-300">
            <Link href="/snippets">
              <a>Snippets</a>
            </Link>
          </li>
          <li className="transition-on click-effect dark:hover:text-indigo-300">
            <Link href="/cheatsheets">
              <a>Cheatsheets</a>
            </Link>
          </li>
          <li className="transition-on click-effect dark:hover:text-indigo-300">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
