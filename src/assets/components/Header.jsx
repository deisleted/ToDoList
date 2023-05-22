import Styles from "./Header.module.css"

export function Header(){
    return (
        <div className={Styles.header}>
            <a href="#">
                <img src='src/img/Logo.svg' alt="" /> 
            </a> 
        </div>
    )
}