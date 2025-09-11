import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
} from '@mui/material';

const ProductList = ({
  products,
  onEdit,
  onDelete,
  onCreateNew,
  onShow,
  currentPage,
  pageCount,
  onPageChange,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h2">
          Products List
        </Typography>
        <Button variant="contained" color="success" onClick={onCreateNew}>
          Create New
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="products table">
          <TableHead>
            <TableRow>
              <TableCell>Created At</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>{formatDate(product.createdAt)}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell align="right">{product.weight}g</TableCell>
                  <TableCell align="right">Rs.{product.price}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => onEdit(product)}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() => onShow(product)}
                      sx={{ mr: 1 }}
                    >
                      Show
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => onDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
        <Button
          onClick={() => onPageChange(null, currentPage - 1)}
          disabled={currentPage <= 1}
          sx={{ mr: 1 }}
        >
          &laquo; Previous
        </Button>
        <Button
          onClick={() => onPageChange(null, currentPage + 1)}
          disabled={currentPage >= pageCount}
        >
          Next &raquo;
        </Button>
      </Box>
    </Box>
  );
};

export default ProductList;