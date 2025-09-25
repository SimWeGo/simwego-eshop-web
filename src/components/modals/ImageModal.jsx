import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { X } from "lucide-react";

const ImageModal = ({ open, onClose, imageSrc, title }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: 'white',
          borderRadius: '20px',
          maxHeight: '90vh',
        }
      }}
    >
      <div className="absolute top-4 right-4 z-10">
        <IconButton onClick={onClose} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
          <X className="w-5 h-5" />
        </IconButton>
      </div>
      <DialogContent sx={{ p: 0, pb: 0 }}>
        <div className="flex justify-center items-center p-4">
          <img
            src={imageSrc}
            alt={title}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;