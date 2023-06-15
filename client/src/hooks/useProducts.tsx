import { useState, useEffect } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

const SERVER_URL = import.meta.env.VITE_SERVER_URL

export default function useProducts( getProducts = true, id?: string ) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState<number>()

  // get all products
  useEffect(() => {
    if (!getProducts) return;
    axios.get(`${SERVER_URL}/products`).then(res => {
      setStatus(res.status);
      setProducts(res.data);
    }).catch(err => {
      setStatus(err.response.status)
    })
  }, [getProducts])

  // get a single product
  useEffect(() => {
    if (id == null) return;
    axios.get(`${SERVER_URL}/products/${id}`).then(res => {
      setStatus(res.status)
      setProduct(res.data);
    }).catch(err => {
      setStatus(err.response.status)
    })
  }, [id])

  return { status, products, product };
}
