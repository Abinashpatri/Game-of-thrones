import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { getData } from "../service/api.js";
import Charecter from "./Charecter.jsx";

const Charecters = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    let response = await getData();
    setData(response.data);
  };

  return (
    <Box style={{ margin: "10px 35px" }}>
      <Grid container>
        {data.map((value) => (
          <Grid item>
            <Charecter value={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Charecters;
