import trash from '../assets/trash.svg'
import check from '../assets/check.svg'
import styles from './TodoPosts.module.css'

export function TodoPosts({ todo }) {
    return (
            <div className={styles.todoWrap}>
                <div className={styles.todoPosts}>
                    <img src={check} alt="check" />
                    <p>{todo}</p>
                    <img src={trash} alt="trash" />
                </div>
            </div>
    )
}