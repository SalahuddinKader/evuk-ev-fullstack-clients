import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

/**
 * Client details  state and function
 * @state {array} singleClientList
 * @fun {function} fetchClientDetails
 */

const ClientDetails = () => {
  const [singleClientList, setSingleClientList] = useState([]);
  const { id } = useParams();
  const { name, companyName, email, phone } = singleClientList;

  //Fetch api to get specfic client with id
  const fetchClientDetails = async () => {
    const response = await api.get(`/clients/${id}`).catch((err) => {
      console.log("Err", err);
    });
    const { data } = response;
    return data;
  };
  useEffect(() => {
    fetchClientDetails();
    const getSingleClients = async () => {
      const singleClients = await fetchClientDetails();
      if (singleClients) setSingleClientList(singleClients);
    };
    getSingleClients();
  }, []);

  return (
    <Card
      data-testid="client-details-card"
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: "20px 5px",
        marginBottom: "20px",
        height: 600,
      }}
    >
      <CardContent>
        <Grid
          container
          spacing={1}
          textAlign="center"
          data-testid="client-details-grid"
        >
          <Avatar
            data-testid="client-details-Avatar"
            sx={{ width: 200, height: 200, marginLeft: "80px" }}
          >
            C
          </Avatar>

          <Grid xs={12} item>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
              data-testid="client-details-name"
            >
              {name}
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              data-testid="client-details-email"
            >
              Email: {email}
            </Typography>
          </Grid>

          <Grid xs={12} item>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.primary"
              gutterBottom
              data-testid="client-details-company-fields"
            >
              Company Fields
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              data-testid="client-details-company-name"
            >
              Company Name: {companyName}
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              data-testid="client-details-phone"
            >
              Phone: {phone}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid xs={12} textAlign="center" marginTop="10px" item>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              data-testid="client-details-button-back-to-list"
            >
              Back to list
            </Button>
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ClientDetails;
