import React from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from '@mui/material';

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <>
      <DialogTitle>Product Details</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
            ID:
          </Typography>
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            {product._id}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
            Name:
          </Typography>
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            {product.name}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
            Weight:
          </Typography>
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            {product.weight}g
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
            Price:
          </Typography>
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            Rs.{product.price}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
            Created At:
          </Typography>
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            {formatDate(product.createdAt)}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </>
  );
};

export default ProductDetails;