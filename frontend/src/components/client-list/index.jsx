import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ClientCard from "../client-card";
import { Grid, Box, Button, Chip, TextField, Typography } from "@mui/material";
import { ClientContext } from "../client-list-context";
/**
 * Client list component's props
 * @prop {array} clients
 * @prop {string} search
 * @prop {array} searchResult
 * @prop {function} searchHandler
 */

const ClientList = () => {
  const { clients, search, searchHandler, searchResult } =
    useContext(ClientContext);

  // New variable depends on search results
  const newSearchClients = search.length < 1 ? clients : searchResult;

  // loop through newSearchClients list
  const renderClientsList = newSearchClients.map((client, i) => (
    <ClientCard key={i} client={client} />
  ));

  // Handle getSearchTerm
  const getSearchTerm = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <Grid
      container
      spacing={1}
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "20px 5px",
      }}
    >
      <Grid xs={0} marginBottom="20px" item>
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
          Client list:{" "}
        </Typography>
      </Grid>
      <Grid item xs={4} marginTop="5px">
        <Chip
          data-testid="client-list-length"
          label={clients.length}
          color="primary"
        />
      </Grid>

      <Grid xs={3} marginTop="10px" item>
        <Link to="/add" style={{ textDecoration: "none" }}>
          <Button
            data-testid="client-list-button-add-client"
            variant="contained"
          >
            Add Client
          </Button>
        </Link>
      </Grid>
      <Grid xs={6} sm={6} item>
        <TextField
          sx={{ width: 590, margin: "0 0px 20px -10px " }}
          label="Search Clients..."
          variant="outlined"
          type="text"
          value={search}
          onChange={getSearchTerm}
          data-testid="client-list-textfield-search"
        ></TextField>
      </Grid>

      <Box data-testid="client-list-render-client-list">
        {renderClientsList.length > 0 ? (
          renderClientsList
        ) : (
          <Typography sx={{ margin: " 0px 200px", fontSize: "20px" }}>
            No Clients available
          </Typography>
        )}
      </Box>
    </Grid>
  );
};

export default ClientList;
