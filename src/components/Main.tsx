import styles from './Main.module.css'
import plus from '../assets/plus.svg'
import clipboard from '../assets/clipboard.png'
import { TodoPosts } from './TodoPosts'

export function Main() {

    function handleSubmit() {
        console.log(
            'submit'
        );
        
    }

    function handleTodoText(e: any) {
        console.log(e.target.value);        
    }
    
    return (
        <>
            <form className={styles.mainHeader} onSubmit={handleSubmit}>
                <textarea
                    onChange={handleTodoText}
                    placeholder='Adicione uma nova tarefa'
                />
                <button 
                    type='submit'
                >
                    Criar
                    <img src={plus}/>
                </button>
            </form>
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
            
        </>
    )
}