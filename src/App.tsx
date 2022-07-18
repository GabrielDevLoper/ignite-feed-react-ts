import { Header } from "./components/Header";
import { Post } from "./components/Post"

import "./global.css";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/gabrieldevloper.png",
      name: "Gabriel Barreto",
      role: "Backend Developer"
    },
    publishedAt: new Date('2022-07-13 20:34:15'),
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ]
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego",
      role: "Fullstack Developer"
    },
    publishedAt: new Date('2022-07-13 20:39:15'),
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ]
  },
];

function App() {
  return (
    <>
      <Header /> 
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}

export default App
