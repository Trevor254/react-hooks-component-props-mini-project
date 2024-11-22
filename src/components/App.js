import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"


console.log(blogData);

function App() {
  return (
    <div className="App">
        <Header name="My Awesome Blog"/>
      <About
        about="Welcome to my blog where I share insights about React and more!"
        image="https://via.placeholder.com/215"
      />
      {/* <Article/>
      <ArticleList/> */}
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
