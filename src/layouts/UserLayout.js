import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/user/UserCard";

export default function UserLayout() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (responce) {
        setUserList(responce.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h2>User List</h2>
      {userList.length > 0 &&
        userList.map((val, key) => {
          return (
            <div key={key} style={{ padding: "20px 0px", width: "60%" }}>
              <UserCard user={val}/>
            </div>
          );
        })}
    </div>
  );
}
