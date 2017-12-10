import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Administration from './ProductAdministrationComponent/ProductAdministrationComponent';
import NewProduct from './Product/Product';

 /* var product ={
  title: '',
  imageURL: '',
  description: '',
  price: '',
  quantity: ''
}   */

ReactDOM.render(
   <Administration admin={NewProduct}/>,
  document.getElementById('root')
);
