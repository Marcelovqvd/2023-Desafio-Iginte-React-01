import styles from './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header() {
    return (
        <div className={styles.content}>
            <img src={rocket} alt="rocket" />
            <strong>to</strong>
            <strong>do</strong>
        </div>
    )
}