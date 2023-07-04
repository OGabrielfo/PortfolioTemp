import styles from "../src/styles/footer.module.css"
import Link from "next/link"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBehance } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return(
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 135"><path fill="rgb(26,26,26)" fill-opacity="1" d="M0,32L80,53.3C160,75,320,117,480,128C640,139,800,117,960,106.7C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                
            <div className={styles.footer}>
                <img src="#" alt="Logotipo" />
                <div className={styles.column}>
                    <ul className={styles.inline}>
                        <li><Link href="/"><p>Home</p></Link></li>
                        <li><Link href="/portfolio"><p>Portfólio</p></Link></li>
                        <li><Link href="/portfolio/games"><p>Games</p></Link></li>
                        <li><Link href="/portfolio/artes"><p>Artes</p></Link></li>
                        <li><Link href="/portfolio/videos"><p>Vídeos</p></Link></li>
                        <li><Link href="/portfolio/webdev"><p>Web Dev</p></Link></li>
                        <li><Link href="/contato"><p>Contato</p></Link></li>
                        <li><Link href="/sobre"><p>Sobre</p></Link></li>
                    </ul>
                    <hr />
                    <ul className={styles.inlineIcons}>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faBehance} /></a></li>
                    </ul>
                    <hr />
                    <p className={styles.creditos}>Criado por OGabrielfo &copy;</p>
                </div>
                
            </div>
        </>
    )
}
