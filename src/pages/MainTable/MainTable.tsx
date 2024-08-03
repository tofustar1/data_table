import React, { useEffect, useState } from 'react';
import axios from "axios";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Box, Container } from "@mui/material";
import { ICountry, ICountryResponse } from "../../../types";
import CountryInfoDialog from "../../components/CountryInfoDialog/CountryInfoDialog";

const MainTable = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [openCountryInfo, setOpenCountryInfo] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);

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
      width: 175,
    },
    {
      field: 'capital',
      headerName: 'Capital',
      width: 175,
    },
    {
      field: 'flag',
      headerName: 'Flag',
      width: 175,
      renderCell: (params) => (
          <img
            src={params.value}
            alt={params.row.name}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
      )
    },
    {
      field: 'population',
      headerName: 'Population',
      width: 125,
    },
  ];

  const handleRowClick = (params: GridRowParams) => {
    setSelectedCountry(params.row);
    setOpenCountryInfo(true);
  };

  const handleClose = () => {
    setOpenCountryInfo(false);
  };

  return (
      <Container
          maxWidth="xl"
          sx={{display: 'flex', justifyContent: 'center'}}
      >
        <Box sx={{mt: 5, maxWidth: 700}}>
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
              rowHeight={100}
              onRowClick={handleRowClick}
              sx={{
                '& .MuiDataGrid-cell:focus': {
                  outline: 'none',
                },
              }}
          />
        </Box>
        <CountryInfoDialog
            open={openCountryInfo}
            onClose={handleClose}
            country={selectedCountry}
        />
      </Container>
  );
};

export default MainTable;