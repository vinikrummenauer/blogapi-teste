import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://api-fake-blog.herokuapp.com/postagens")
    .then((response) => {
        setPosts(response.data)
    }).catch(() => {
      console.log("deu errado")
    })
  }, [])

  return (
    <div className="App">

      <div className="cards">

      {posts.map((post, key) => {
        return (
          <div className="card" key={key}>
            <div className="card-body">
             <h1>{post.title}</h1>
              <div className="line"></div>
                    <h2>{post.description}</h2>
               </div>
            </div>
        )
      })}
          </div>
        </div>
  );
}

export default App;
