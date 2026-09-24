
import Image from "next/image"
import style from "./header.module.css"
export default function Header(){
    return(
        <div className={style.Estrutura}>
            <h1 className={style.Titulo}>PETCLEAN</h1>
            <ul className={style.Lista}>
                <li className={style.Item} >Sobre</li>
                <li className={style.Item} >Contatos</li>
                <li className={style.Item} >Produtos</li>
                <li className={style.Item} >Perfil</li>
            </ul>
        </div>
    )   
}