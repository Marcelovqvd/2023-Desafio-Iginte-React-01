import styles from './Main.module.css'

import plus from '../assets/plus.svg'

export function Main() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.mainHeader}>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button>Criar<img src={plus}/></button>
            </header>
            {/* <section className={styles.mainSection}>
                <strong>Tarefas criadas <span>0</span></strong>
                <strong>Concluídas <span>0</span></strong>
            </section> */}
        </div>
    )
}