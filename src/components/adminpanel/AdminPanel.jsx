import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductThunk,
  getProductThunk,
  postProductThunk,
} from '../../redux/reducers/productSlice';
import { deleteBasketThunk } from '../../redux/reducers/basketSlice';
import { useFormik } from 'formik';
import styles from './AdminPanel.module.scss';

export const AdminPanel = () => {
  const dispatch = useDispatch();
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [priceSearchTerm, setPriceSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  const product = useSelector((state) => state.product.product) || [];

  const deleteItem = (id) => {
    dispatch(deleteProductThunk(id));
    dispatch(deleteBasketThunk(id));
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: '',
      price: '',
      title: '',
    },
    onSubmit: (values) => {
      dispatch(postProductThunk(values));
      formik.resetForm();
    },
  });

  const handleNameSearch = () => {
    const result = product.filter((p) =>
      p.title.toLowerCase().includes(nameSearchTerm.toLowerCase())
    );
    setFilteredProducts(result);
  };

  const handlePriceSearch = () => {
    const result = product.filter((p) =>
      p.price.toString().includes(priceSearchTerm)
    );
    setFilteredProducts(result);
  };

 
  const productsToShow = filteredProducts.length > 0 ? filteredProducts : product;

  return (
    <div className={styles.adminPanel}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          id="thumbnail"
          name="thumbnail"
          type="text"
          placeholder="Thumbnail URL"
          onChange={formik.handleChange}
          value={formik.values.thumbnail}
        />
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Product Title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <input
          id="price"
          name="price"
          type="text"
          placeholder="Price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <button type="submit">Add Product</button>
      </form>

      <div className={styles.searchArea}>
        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Search by name"
            value={nameSearchTerm}
            onChange={(e) => setNameSearchTerm(e.target.value)}
          />
          <button onClick={handleNameSearch}>Search Name</button>
        </div>

        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Search by price"
            value={priceSearchTerm}
            onChange={(e) => setPriceSearchTerm(e.target.value)}
          />
          <button onClick={handlePriceSearch}>Search Price</button>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productsToShow.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.thumbnail} alt={item.title} width="60" />
              </td>
              <td>{item.title}</td>
              <td>{item.price} AZN</td>
              <td>
                <button onClick={() => deleteItem(item._id)}>SİL</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
