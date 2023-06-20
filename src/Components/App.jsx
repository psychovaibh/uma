import React, { useState } from "react";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import ShowUser from "./ShowUser";
import { UserData } from "../Data/UserData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(props) {
  const [data, setData] = useState(UserData);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navbar />
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
