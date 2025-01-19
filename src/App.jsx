import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse aspernatur fugiat, rerum modi consequatur, natus ratione iure labore, exercitationem ipsa eligendi nesciunt accusantium corrupti tempora accusamus est numquam neque."
          />
          <Post author="Diretoria" content="Novo Post" />
        </main>
      </div>
    </div>
  );
}

// Default Exports vs Name Exports

// Default Export: export default App
// Named Export: export function App()
