import "./global.css";

import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: "1",
    author: {
      avatarUrl: "http://github.com/mariaclarabarbosa.png",
      name: "Maria Clara",
      role: "Front-end Developer",
    },
    comment: [
      {
        type: "paragraph",
        content: "Fala galeraa ๐",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
      {
        type: "link",
        content: "#novoprojeto",
      },
      {
        type: "link",
        content: "#nlw",
      },
      {
        type: "link",
        content: "#rocketseat",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "2",
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTP @ Rocketseat",
    },
    comment: [
      {
        type: "paragraph",
        content: "Fala pessoal ๐",
      },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfรณlio. Foi um baita desafio criar todo o design e codar na unha, mas consegui ๐ช๐ป",
      },
      {
        type: "paragraph",
        content: "Acesse e deixe seu feedback ๐",
      },
      {
        type: "link",
        content: "devonlane.design",
      },
      {
        type: "link",
        content: "#uiux",
      },
      {
        type: "link",
        content: "#userexperience",
      },
    ],
    publishedAt: new Date(),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
