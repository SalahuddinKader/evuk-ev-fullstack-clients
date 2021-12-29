import React, { useState, useContext } from "react";
import { ClientContext } from "../client-list-context";
import { Link } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
/**
 * Add Client component's state and prop function
 * @state {object} user
 * @prop {function} addClientHandler
 */

const EditClient = () => {
  const { updateClientHandler, editClient } = useContext(ClientContext);
  const [value, setValue] = useState({ date: null });
  const { id, name, email, companyName, streetAddress, postCode, city, phone } =
    editClient;
  const [user, setUser] = useState({
    id,
    name,
    email,
    companyName,
    streetAddress,
    postCode,
    city,
    phone,
  });

  let url = "/";

  // OnChangeHandler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // Add submit handler
  const addSubmitHendler = (e) => {
    e.preventDefault();
    const { name, email, companyName, streetAddress, postCode, city, phone } =
      user;
    if (
      name === "" &&
      email === "" &&
      companyName === "" &&
      streetAddress === "" &&
      postCode === "" &&
      city === "" &&
      phone === ""
    ) {
      alert("All the fields are required ");
    }

    let merged = { ...user, ...value };
    updateClientHandler(merged);

    setUser({
      name: "",
      email: "",
      companyName: "",
      streetAddress: "",
      postCode: "",
      city: "",
      phone: "",
    });
    window.location = url;
  };
  return (
    <Card
      data-testid="card-add-client"
      style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}
    >
      <CardContent>
        <Typography data-testid="add-client-label" variant="h4">
          Edit Client
        </Typography>
        <Grid xs={12} textAlign="end" marginTop="10px" item>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button data-testid="button-back-to-list" variant="outlined">
              Back to list
            </Button>
          </Link>
        </Grid>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="body2"
          component="p"
        >
          Edit client on record
        </Typography>
        <form onSubmit={addSubmitHendler} data-testid="form-submit">
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Name"
                name="name"
                value={user.name}
                onChange={onChangeHandler}
                data-testid="name-text-field"
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                value={user.email}
                onChange={onChangeHandler}
                data-testid="email-text-field"
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Company Name"
                name="companyName"
                variant="outlined"
                value={user.companyName}
                onChange={onChangeHandler}
                data-testid="company-name-text-field"
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Phone"
                name="phone"
                variant="outlined"
                value={user.phone}
                onChange={onChangeHandler}
                data-testid="phone-text-field"
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Street"
                name="streetAddress"
                variant="outlined"
                value={user.streetAddress}
                onChange={onChangeHandler}
                data-testid="street-text-field"
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Postcode"
                variant="outlined"
                name="postCode"
                value={user.postCode}
                onChange={onChangeHandler}
                data-testid="postcode-text-field"
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="City"
                name="city"
                variant="outlined"
                value={user.city}
                onChange={onChangeHandler}
                data-testid="city-text-field"
                required
              />
            </Grid>
            <Grid xs={12} sm={5.1} item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={value.date}
                  data-testid="date-text-field"
                  onChange={(e) => setValue({ date: e })}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid xs={12} marginTop="10px" item>
              <Button
                data-testid="button-add"
                type="submit"
                variant="contained"
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditClient;
