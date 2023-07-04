import styles from "../src/styles/navbar.module.css"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className={styles.navbarBackground}>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/"><p>Home</p></Link>
                </li>
                <li>
                    <Link href="/portfolio"><p>Portfólio</p></Link>
                    <ul>
                        <li>
                            <Link href="/portfolio/games"><p>Games</p></Link>
                        </li>
                        <li>
                            <Link href="/portfolio/artes"><p>Artes</p></Link>
                        </li>
                        <li>
                            <Link href="/portfolio/videos"><p>Vídeos</p></Link>
                        </li>
                        <li>
                            <Link href="/portfolio/webdev"><p>Web Dev</p></Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/contato"><p>Contato</p></Link>
                </li>
                <li>
                    <Link href="/sobre"><p>Sobre</p></Link>
                </li>
            </ul>
        </nav>
    )
}