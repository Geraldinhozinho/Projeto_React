
import styles from "./footer.module.css"

export default function Footer(){
    return(
        <div className={styles.Estrutura}>
            <div className={styles.FooterOrganiza}>
                <h1 className={styles.Titulo} >PETCLEAN</h1>
                <h2 className={styles.SubTitulo}>FOOTER</h2>
            </div>
            <ul className={styles.Lista}>
                <li className={styles.Item}>Sobre</li>
                <li className={styles.Item}>Contatos</li>
                <li className={styles.Item}>produtos</li>
                <li className={styles.Item}>Perfil</li>
            </ul>
        </div>
    )
}