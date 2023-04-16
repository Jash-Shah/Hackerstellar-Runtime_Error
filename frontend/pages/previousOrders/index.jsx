import React from 'react';
import Head from "next/head";
import ProductList from '../../components/PreviousOrders';

function App() {
  const products = [
    { id: 1, name: 'Product 1', link: '#' },
    { id: 2, name: 'Product 2', link: '#' },
    { id: 3, name: 'Product 3', link: '#' },
    { id: 4, name: 'Product 4', link: '#' },
    { id: 5, name: 'Product 5', link: '#' }
  ];

  return (
    <div>
        <Head>
            <title>Previous Orders</title>
        </Head>
        <div className="container mx-auto">
            <ProductList products={products} />
        </div>
    </div>
    
  );
}

export default App;
