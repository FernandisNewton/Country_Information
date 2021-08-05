import React, { useState, useEffect } from "react";
import "./CountryData.css";
import DataCard from "../Card";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function CountryData() {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setOpen(false);
      await axios
        .get(`https://restcountries.eu/rest/v2/region/Asia`)
        .then((res) => {
          const info = res.data;

          setData(info);
          setOpen(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  if (data == null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          Refreshed!!
        </MuiAlert>
      </Snackbar>
      <div className="header">
        <h1 className="title">Information of Countries in Asia</h1>
        <Button
          onClick={() => {
            getData();
          }}
          size="large"
          variant="contained"
          color="primary"
        >
          Refresh
        </Button>
      </div>
      <div className="countryInfo">
        {data.map((val, idx) => {
          return <DataCard key={idx} data={val} />;
        })}
      </div>
    </div>
  );
}

export default CountryData;
