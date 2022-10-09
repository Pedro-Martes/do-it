import styles from './Header.module.css';
import {Rocket} from 'phosphor-react'

export function Header(){
    return(
        <header className={styles.header}>
         
            <strong><Rocket color='#4ea8de'/>Do.It!</strong>
           
        </header>
    )
}