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
    if (weight < 0) {
      alert('Product weight cannot be negative.');
      return;
    }
    if (price < 0) {
      alert('Product price cannot be negative.');
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
            label="Weight in grams"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            required
            inputProps={{ min: "0" }}
          />
          <TextField
            label="Price in Rs."
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
            inputProps={{ min: "0" }}
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