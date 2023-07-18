import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { UserInterface } from "./types/User";
import { sortByKey } from "./utils/Common";
import AddUserComponent from "./component/AddUserComponet";
import UserComponent from "./component/UsersComponent";

const App: React.FC = () => {
  const [userList, setUserList] = useState<UserInterface[]>([]);

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((results) => {
        // sorting

        const sortedArray: UserInterface[] = sortByKey(results, "name");
        setUserList([...sortedArray]);
      });
  };

  const saveUser = (user: UserInterface) => {
    const mergeUser = [...userList, user];
    const sortedArray: UserInterface[] = sortByKey(mergeUser, "name");
    setUserList([...sortedArray]);
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Home Application </h1>
        <Link to={"users"} className="navLink">
          Users
        </Link>
        <Link to={"add-user"} className="navLink">
          Add User
        </Link>
        <Routes>
          <Route
            path="/users"
            element={<UserComponent userList={userList} />}
          />
          <Route
            path="/add-user"
            element={<AddUserComponent addUserInList={saveUser} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
