import React, {useEffect} from 'react'
import axios from "axios";

export default function PostLayout() {
  //by fetch
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // },[]);

  //by axios
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <div>TodoLayout</div>
  )
}
