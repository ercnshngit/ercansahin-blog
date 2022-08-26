import Link from 'next/link'

import styles from 'styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href='/'>
            <a>
                Home
            </a>
        </Link>
        <Link href='/about-me'>
            <a>
                About
            </a>
        </Link>
        <Link href='/blog'>
            <a>
                Blog
            </a>
        </Link>
        <Link href='/snippets'>
            <a>
                Snippets
            </a>
        </Link>
        <Link href='/bookmarks'>
            <a>
                Bookmarks
            </a>
        </Link>
    </nav>
  )
}