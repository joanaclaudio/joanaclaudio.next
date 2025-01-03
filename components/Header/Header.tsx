import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'


export default function Header() {
  return (
    <header className={styles.header}>
        <h1>React & Next.js</h1>
        <nav className={styles.nav}>
          <li><Link href="/">Home </Link></li>
          <li><Link href="/loja">Loja</Link></li>
            
          <li><Link href="/tecnologias">Tecnologias</Link></li>
        </nav>
    </header>
  )
}
