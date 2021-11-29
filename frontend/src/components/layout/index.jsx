import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header";
import ClientList from "../client-list";
import AddClient from "../add-client";
import ClientDetails from "../client-details";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<ClientList />} />
        <Route path="/add" element={<AddClient />} />
        <Route path="/client/:id" element={<ClientDetails />} />
      </Routes>
    </Router>
  );
};

export default Layout;
