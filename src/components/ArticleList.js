import React from "react";
//import {title,date,preview} from "./Article"
import Article from "./Article";


function Articlelist({posts}){
    return(
        <main>
            {posts.map((post) => (
                <Article
                key={post.id} // Unique key for each article
                title={post.title}
                date={post.date}
                preview={post.preview}
                />
            ))}
        </main>
    )
}

export default Articlelist