import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';
import { Container, Typography, Box, Dialog } from '@mui/material';
import './App.css';

const API_URL = '/api/products';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showProduct, setShowProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const itemsPerPage = 4;

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}?page=${currentPage}&limit=${itemsPerPage}`);
      const data = await response.json();
      if (data.success) {
        setProducts(data.products);
        setPageCount(data.totalPages);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleFormSubmit = async (formData) => {
    if (editingProduct) {
      try {
        await fetch(`${API_URL}/${editingProduct._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        fetchProducts();
        setEditingProduct(null);
        setOpenDialog(false);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      try {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        fetchProducts();
        setOpenDialog(false);
      } catch (error) {
        console.error('Error creating product:', error);
      }
    }
  };

  const handleDelete = async (productId) => {
    try {
      await fetch(`${API_URL}/${productId}`, { method: 'DELETE' });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setShowProduct(null);
    setOpenDialog(true);
  };

  const handleCreateNewClick = () => {
    setEditingProduct(null);
    setShowProduct(null);
    setOpenDialog(true);
  };

  const handleShowClick = (product) => {
    setShowProduct(product);
    setEditingProduct(null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProduct(null);
    setShowProduct(null);
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Product Management
        </Typography>
        <ProductList
          products={products}
          onEdit={handleEditClick}
          onDelete={handleDelete}
          onCreateNew={handleCreateNewClick}
          onShow={handleShowClick}
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          {editingProduct ? (
            <ProductForm
              onSubmit={handleFormSubmit}
              editingProduct={editingProduct}
              onCancel={handleCloseDialog}
            />
          ) : showProduct ? (
            <ProductDetails product={showProduct} onClose={handleCloseDialog} />
          ) : (
            <ProductForm
              onSubmit={handleFormSubmit}
              onCancel={handleCloseDialog}
            />
          )}
        </Dialog>
      </Box>
    </Container>
  );
}

export default App;