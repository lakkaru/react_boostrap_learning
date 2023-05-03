import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserLayout() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (responce) {
       setUserList(responce.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
  return <div>
    {userList.length>0 && userList.map((val,key)=>{
        return <div key={key}>
            <h3>{val.name} #{val.id}</h3>
            <p>{val.email}</p>
        </div>
    })}
  </div>;
}
