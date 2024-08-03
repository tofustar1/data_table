import React from 'react';
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

interface CountryFlagDialogProps {
  open: boolean;
  onClose: () => void;
  imageUrl: string;
}

const CountryFlagDialog: React.FC<CountryFlagDialogProps> = ({open, onClose, imageUrl}) => {
  return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <img
              src={imageUrl}
              alt="Large version"
              style={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
  );
};

export default CountryFlagDialog;