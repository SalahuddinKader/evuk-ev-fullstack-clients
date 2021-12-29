import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import api from "../../api";
/**
 * Client list context display all state and functions
 * @state {array} clients
 * @state {string} search
 * @state {array} searchResult
 * @func {function} AddClientHandler
 * @func {function} retrieveClients
 * @func {function} removeClientHandler
 * @func {function} searchHandler
 */
export const ClientContext = createContext();

export const ClientListContext = (props) => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [editClient, setEditClient] = useState([]);
  // AddClientHandler and post clients
  const addClientHandler = async (client) => {
    const request = {
      id: Math.random() * 1000,
      ...client,
    };
    const response = await api.post("/clients", request);
    setClients([...clients, response.data]);
  };

  // Handle get api
  const retrieveClients = async () => {
    const response = await api.get("/clients");
    return response.data;
  };

  useEffect(() => {
    const getAllClients = async () => {
      const allClients = await retrieveClients();
      if (allClients) setClients(allClients);
    };
    getAllClients();
  }, []);

  // Delete individual client
  const removeClientHandler = async (id) => {
    await api.delete(`/clients/${id}`);
    setClients(clients.filter((client) => client.id !== id));
  };

  //Find Client ID
  const editClientHandler = (id) => {
    setEditClient(clients.find((client) => client.id === id));
  };

  //Update Client Handler
  const updateClientHandler = async (client) => {
    console.log(client);
    const response = await api.put(`/clients/${client.id}`, client);
    const { id } = response.data;
    setClients(
      clients.map((client) => {
        return client.id === id ? { ...response.data } : client;
      })
    );
  };
  // Handling search through object value
  const searchHandler = (search) => {
    setSearch(search);
    if (search !== "") {
      const newClientList = clients.filter((client) => {
        return Object.values(client)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResult(newClientList);
    } else {
      setSearchResult(clients);
    }
  };

  return (
    <>
      <ClientContext.Provider
        data-testid="client-list-context-provider"
        value={{
          clients,
          search,
          editClient,
          searchResult,
          searchHandler,
          setClients,
          addClientHandler,
          retrieveClients,
          removeClientHandler,
          editClientHandler,
          updateClientHandler,
        }}
      >
        {props.children}
      </ClientContext.Provider>
    </>
  );
};

export default ClientListContext;
