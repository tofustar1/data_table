import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ICountry } from "../../../types";

interface CountryInfoDialogProps {
  open: boolean;
  onClose: () => void;
  country: ICountry | null;
}

const CountryInfoDialog: React.FC<CountryInfoDialogProps> = ({open, onClose, country}) => {
  return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Country info</DialogTitle>
        <DialogContent>
          {country && (
              <>
                <DialogContentText>
                  <strong>Name:</strong> {country.name}
                </DialogContentText>
                <DialogContentText>
                  <strong>Capital:</strong> {country.capital}
                </DialogContentText>
                <DialogContentText>
                  <strong>Population:</strong> {country.population}
                </DialogContentText>
                <DialogContentText>
                  <strong>Flag:</strong>
                  <img
                      src={country.flag}
                      alt={country.name}
                      style={{ width: '100%', height: 'auto'}}
                  />
                </DialogContentText>
              </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
  );
};

export default CountryInfoDialog;