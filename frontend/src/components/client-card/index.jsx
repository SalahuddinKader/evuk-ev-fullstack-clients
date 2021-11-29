import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClientContext } from "../client-list-context";
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

/**
 * Client Card component's props and function
 * @prop {array} client
 * @prop {function} removeClientHandler
 */

const ClientCard = ({ client }) => {
  const { removeClientHandler } = useContext(ClientContext);
  const {
    id,
    name,
    email,
    companyName,
    streetAddress,
    postCode,
    city,
    phone,
    date,
  } = client;
  return (
    <Card
      data-testid="client-card"
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "20px 5px",
        marginBottom: "20px",
      }}
    >
      <CardContent>
        <Link
          data-testid="client-card-link"
          to={{
            pathname: `/client/${id}`,
          }}
          style={{ textDecoration: "none" }}
        >
          <Grid container spacing={1}>
            <Avatar data-testid="client-card-avatar">C</Avatar>

            <Grid xs={12} sm={6} item>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                data-testid="client-card-name"
              >
                {name}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                data-testid="client-card-email"
              >
                Email: {email}
              </Typography>
            </Grid>

            <Grid xs={12} item>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.primary"
                gutterBottom
                data-testid="client-card-company-fields"
              >
                Company Fields
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                data-testid="client-card-company-name"
              >
                Company Name: {companyName}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                data-testid="client-card-phone"
              >
                Phone: {phone}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                data-testid="client-card-street-address"
              >
                Street: {streetAddress}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                data-testid="client-card-postcode"
              >
                Postcode: {postCode}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                data-testid="client-card-city"
              >
                City: {city}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                data-testid="client-card-city"
              >
                Date: {new Date(date).toDateString()}
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </CardContent>
      <CardActions>
        <Grid xs={12} sm={6} item>
          <Button
            data-testid="client-card-button-delete"
            size="medium"
            onClick={() => removeClientHandler(id)}
          >
            Delete
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ClientCard;
