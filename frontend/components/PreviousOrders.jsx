import React from 'react';

function Product(props) {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6 ">
      <a href={props.link} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700  dark:bg-blue-600 dark:hover:bg-blue-800">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.id}</h5>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-200">{props.name}</p>
        </div>
      </a>
    </div>
  );
}

function ProductList(props) {
  const products = props.products.map((product) => (
    <Product key={product.id} id={product.id} name={product.name} link={product.link} />
  ));

  return (
    <div className='dark:bg-gray-900'>
         <div className='text-xl sm:text-2xl text-center pt-4 underline font-bold dark:text-white '>
            Previous Orders
         </div>

         <div className="flex flex-wrap justify-center p-2 pt-8 pb-8 gap-3">
            {products}
        </div>
        
    </div>
   
  );
}

export default ProductList;
