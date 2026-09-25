
import Link from "next/link";
import styles from "./index.module.css";

export default function Index() {
    return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Minha página</h1>
    
        <Link href={"/"}>
            <button>Voltar par a Página</button>
        </Link>
    </div>
    );
}