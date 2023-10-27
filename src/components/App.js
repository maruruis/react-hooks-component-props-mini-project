import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const about = (
    <p>
      Personal Blog by Ian Kimani <br />
      here i share my experience in Moringa School
    </p>
  );
  const logo = "https://via.placeholder.com/215";

  return (
    <div className="App">
      <Header name = "My Personal Blog" />
      <About image = {logo} about = {about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;