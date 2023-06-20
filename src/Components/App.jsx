import React, { useState } from "react";
import Navbar from "./Navbar";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import ShowUser from "./ShowUser";
import { UserData } from "../Data/UserData";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default function App(props) {
  // console.log(props);
  const [data, setData] = useState(UserData);
  const [selectData, setSelectData] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddUser data={data} setData={setData}/>} />
          <Route path="/show" element={<ShowUser data={data} setData={setData} selectData={selectData}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
