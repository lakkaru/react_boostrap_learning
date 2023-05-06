import React, { useEffect, useState } from "react";
import axios from "axios";
import PostListLayout from "./postLayout/PostListLayout";

export default function PostLayout({ selectedUserId }) {
  const [posts, setPosts] = useState([]);
  //by fetch
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // },[]);

  //by axios
  // console.log(`https://jsonplaceholder.typicode.com/posts/${selectedUserId}`);

  useEffect(() => {
    if (selectedUserId) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${selectedUserId}/posts`
        )
        .then(function (response) {
          // handle success
          setPosts(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }, [selectedUserId]);
  // console.log(posts);

  return (
    <div style={{ marginTop: '' }}>
      <h2>User Posts</h2>
       {posts.length>0 && <PostListLayout postList={posts}/>}
    </div>
  );
}
