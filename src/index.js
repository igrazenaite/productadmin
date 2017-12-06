import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Administration from './ProductAdministrationComponent/ProductAdministrationComponent';

 var product ={
  title: '',
  imageURL: '',
  description: '',
  price: '',
  quantity: ''
} 

ReactDOM.render(
   <Administration administration={product}/>,
  document.getElementById('root')
);
