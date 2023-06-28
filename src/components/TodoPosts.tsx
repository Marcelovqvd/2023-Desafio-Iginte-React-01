import trash from '../assets/trash.svg'
import check from '../assets/check.svg'
//import checkClick from '../assets/checkClick.svg'
import styles from './TodoPosts.module.css'

export function TodoPosts() {
    return (
            <div className={styles.todoWrap}>
                <div className={styles.todoPosts}>
                    <img src={check} alt="check" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque corrupti enim possimus repudiandae. Harum qui possimus necessitatibus sit ullam nulla quasi, repellat eveniet ducimus perspiciatis illum provident modi numquam!</p>
                    <img src={trash} alt="trash" />

                    {/* todo done
                    <img src={checkClick} alt="checkClick" />
                    <p className={styles.todoDone}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sed voluptate ipsum sequi inventore quam neque accusantium quas laudantium consequuntur voluptates pariatur quidem dolore est, soluta alias fugit. Impedit, dolore?</p>
                    */}
                </div>
            </div>
    )
}