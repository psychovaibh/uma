import React, { useState } from "react";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import ShowUser from "./ShowUser";
import { UserData } from "../Data/UserData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// all components handle here

export default function App(props) {
  // data taken from UserData.js file and state defined
  const [data, setData] = useState(UserData);

  // for updation state define for selected user
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navbar selectedUser={selectedUser} />
        <Routes>
          <Route
            path="/"
            element={
              <AddUser
                data={data}
                setData={setData}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            }
          />
          <Route
            path="/show"
            element={
              <ShowUser
                data={data}
                setData={setData}
                setSelectedUser={setSelectedUser}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
