import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ViniciusTroyack.png",
      name: "Vinicius Troyack",
      role: "Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera 😎",
      },
      {
        type: "paragraph",
        content: "Estou subindo mais um projeto para o meu portifa.",
      },
      { type: "link", content: "github.com/ViniciusTroyack" },
    ],
    publishedAt: new Date("2023-02-20 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://picsum.photos/200",
      name: "Nico",
      role: "Designer",
    },
    content: [
      {
        type: "paragraph",
        content: "Mais um para conta!",
      },
      {
        type: "paragraph",
        content: "Finalmente finalizando mais um projeto de arte.",
      },
      { type: "link", content: "github.com/ViniciusTroyack" },
    ],
    publishedAt: new Date("2023-02-19 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
