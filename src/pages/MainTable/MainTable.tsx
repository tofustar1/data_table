import React, { useEffect, useState } from 'react';
import axios from "axios";
import { DataGrid, GridCellParams, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Box, Container } from "@mui/material";
import { ICountry, ICountryResponse } from "../../../types";
import CountryInfoDialog from "../../components/CountryInfoDialog/CountryInfoDialog";
import CountryFlagDialog from "../../components/CountryFlagDialog/CountryFlagDialog";
import './MainTable.css';

const MainTable = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [openCountryDialog, setOpenCountryDialog] = useState(false);
  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      headerClassName: 'column-header',
      cellClassName: 'column-name',
      width: 175,
    },
    {
      field: 'capital',
      headerName: 'Capital',
      headerClassName: 'column-header',
      cellClassName: 'column-capital',
      width: 175,
    },
    {
      field: 'flag',
      headerName: 'Flag',
      headerClassName: 'column-header',
      cellClassName: 'column-flag',
      width: 175,
      renderCell: (params) => (
          <img
            src={params.value}
            alt={params.row.name}
            style={{ width: '140px', height: '90px', objectFit: 'contain' }}
            onClick={(event: React.MouseEvent<HTMLImageElement>) => {
              event.stopPropagation();
              setSelectedImage(params.value);
              setOpenImageDialog(true);
            }}
          />
      )
    },
    {
      field: 'population',
      headerName: 'Population',
      headerClassName: 'column-header',
      cellClassName: 'column-population',
      width: 125,
    },
  ];

  const handleRowClick = (params: GridRowParams) => {
    setSelectedCountry(params.row);
    setOpenCountryDialog(true);
  };

  const handleCloseCountryDialog = () => {
    setOpenCountryDialog(false);
  };

  const handleCloseImageDialog = () => {
    setOpenImageDialog(false);
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
            open={openCountryDialog}
            onClose={handleCloseCountryDialog}
            country={selectedCountry}
        />
        <CountryFlagDialog
            open={openImageDialog}
            onClose={handleCloseImageDialog}
            imageUrl={selectedImage || ''}
        />
      </Container>
  );
};

export default MainTable;