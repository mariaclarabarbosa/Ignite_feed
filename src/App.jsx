import './global.css';

import { Header } from "./components/Header/Header"
import styles from './App.module.css'
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Maria Clara" content="Olá" />
        </main>
      </div>
    </div>
  )
}

export default App
