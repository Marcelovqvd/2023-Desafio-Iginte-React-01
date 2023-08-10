import styles from './Main.module.css'
import plus from '../assets/plus.svg'

import { TodoPosts } from './TodoPosts'
import { useState } from 'react';
import { Article } from './Article';

export function Main() {
    const [newTodo, setNewTodo] = useState([])
    const [newTodoText, setNewTodoText] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        setNewTodo([...newTodo, newTodoText])
    }

    function handleNewTodoText(event) {
        setNewTodoText(event.target.value);
    }
    
    function onDeleteTodo(todo) {
        const newTodos = newTodo.filter(t => t !== todo)
        setNewTodo(newTodos)
    }

    return (
        <>
            <form className={styles.mainHeader} onSubmit={handleSubmit}>
                <textarea
                    onChange={handleNewTodoText}
                    placeholder='Adicione uma nova tarefa'
                />
                <button type='submit'>
                    Criar
                    <img src={plus}/>
                </button>
            </form>
            <section className={styles.mainSection}>
                <header>
                    <p>Tarefas criadas<span>0</span></p>
                    <p>Concluídas<span>0</span></p>
                </header>
            </section>
            <div className={styles.listPosts}>
                {newTodo.length === 0 ?                    
                    <Article />
                    :
                    newTodo.map(todo => {
                        return (
                            <TodoPosts todo={todo} onDeleteTodo={onDeleteTodo} />
                        )
                    })
                }
            </div>
        </>
    )
}