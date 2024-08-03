import React, { useEffect, useState } from 'react';
import { Box, Container } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { ICountry, ICountryResponse } from "../../../types";

const MainTable = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const {data} = await axios<ICountryResponse[]>('https://restcountries.com/v3.1/all');
        const sortedArr: ICountry[] = data.map((country, index) => ({
          id: index,
          name: country.name.common,
          capital: country.capital ? country.capital[0] : 'N/A',
          population: country.population,
          flag: country.flags.png,
        }));
        setCountries(sortedArr);
      } catch (error) {
        console.error(error);
        setCountries([]);
      }
    };

    getCountries().catch(e => console.error(e));
  }, []);

  const columns: GridColDef<(typeof countries)[number]>[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'capital',
      headerName: 'Capital',
      width: 150,
    },
    {
      field: 'flag',
      headerName: 'Flag',
      width: 150,
    },
    {
      field: 'population',
      headerName: 'Population',
      width: 100,
    },
  ];

  return (
      <Container maxWidth="xl">
        <Box sx={{mt: 5, maxWidth: 800}}>
          <DataGrid
              rows={countries}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 25,
                  },
                },
              }}
          />
        </Box>
      </Container>
  );
};

export default MainTable;