import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <>
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1584447108007-8ba5452bdfb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
            alt="" 
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/renanandradebcc.png" alt="" />
                <strong>Renan Andrade</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
        </>
    )
}