import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './app.module.css'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Renan Andrade"
            content="café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto. Observo a noite fria e chuvosa, até parece confortável por um momento, se não fossem as dezenas de preocupações que me desmotivam a cada dia."
          />
          <Post 
            author="Natacha Borges"
            content="Olá amigos!"
          />
        </main>
      </div>
    </>
  )
}

export default App
