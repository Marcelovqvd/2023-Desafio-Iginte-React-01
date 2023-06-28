import styles from './Main.module.css'
import plus from '../assets/plus.svg'
import clipboard from '../assets/clipboard.png'
import { TodoPosts } from './TodoPosts'

export function Main() {
    return (
        <div>
            <header className={styles.mainHeader}>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button>Criar<img src={plus}/></button>
            </header>
            <section className={styles.mainSection}>
                <header>
                    <p>Tarefas criadas<span>0</span></p>
                    <p>Concluídas<span>0</span></p>
                </header>
                <article>
                    <img src={clipboard} alt="empty" />
                    <div className={styles.mainSectionTexts}>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </article>
            </section>
            <div className={styles.posts} >
                <TodoPosts />
                <TodoPosts />
                <TodoPosts />
                <TodoPosts />
            </div>
            
        </div>
    )
}