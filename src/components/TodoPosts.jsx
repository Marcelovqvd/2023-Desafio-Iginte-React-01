import trash from '../assets/trash.svg'
import check from '../assets/check.svg'
import styles from './TodoPosts.module.css'

export function TodoPosts({ todo, onDeleteTodo }) {

    function handleDelete() {
        onDeleteTodo(todo)
    }

    return (
            <div className={styles.todoWrap}>
                <div className={styles.todoPosts}>
                    <img src={check} alt="check" />
                    <p>{todo}</p>
                    <button type='button' onClick={handleDelete}>
                        <img src={trash} alt="trash" />
                    </button>                    
                </div>
            </div>
    )
}