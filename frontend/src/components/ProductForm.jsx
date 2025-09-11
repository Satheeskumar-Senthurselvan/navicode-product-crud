import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  DialogContent,
  DialogActions,
  DialogTitle,
} from '@mui/material';

const ProductForm = ({ onSubmit, editingProduct, onCancel }) => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setWeight(editingProduct.weight);
      setPrice(editingProduct.price);
    } else {
      setName('');
      setWeight('');
      setPrice('');
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !weight || !price) {
      alert('Please fill in all fields.');
      return;
    }
    onSubmit({ name, weight, price });
  };

  return (
    <>
      <DialogTitle>{editingProduct ? 'Edit Product' : 'Create New Product'}</DialogTitle>
      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Weight"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            required
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="error">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {editingProduct ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Box>
    </>
  );
};

export default ProductForm;