import trash from '../assets/trash.svg'
import check from '../assets/check.svg'
import checkClick from '../assets/checkClick.svg'
import styles from './TodoPosts.module.css'
import { useState } from 'react'

export function TodoPosts({ todo, onDeleteTodo }) {
    const [checkButton, setCheckButton] = useState(false)

    function handleDelete() {
        onDeleteTodo(todo)
    }

    function handleCheck() {
        setCheckButton(!checkButton)
    }

    return (
            <div className={styles.todoWrap}>
                <div className={styles.todoPosts}>
                    {checkButton ? <img src={checkClick} alt="" onClick={handleCheck}/> : <img src={check} alt="check" onClick={handleCheck}/>}                    
                    <p>{todo}</p>
                    <button type='button' onClick={handleDelete}>
                        <img src={trash} alt="trash" />
                    </button>                    
                </div>
            </div>
    )
}