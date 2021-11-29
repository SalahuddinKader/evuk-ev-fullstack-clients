import React from "react";
import ClientListContext from "./client-list-context";
import Layout from "./layout";
const App = () => {
  return (
    <ClientListContext>
      <Layout />
    </ClientListContext>
  );
};

export default App;
