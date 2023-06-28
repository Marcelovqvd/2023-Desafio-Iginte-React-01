import clipboard from '../assets/clipboard.png'
import styles from './Article.module.css'

export function Article() {
    return (
        <article className={styles.mainSection}>
            <img src={clipboard} alt="empty" />
            <div className={styles.mainSectionTexts}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </article>
    )
}