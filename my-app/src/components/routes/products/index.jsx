import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './../../../redux/thunks';
import { cleanError } from './../../../redux/actions';
import store from '../../../redux/store';

const Products = () => {    //hace un get del dispatcher
    const dispatch = useDispatch();
    // busca el store
    const products = useSelector((store) => store.products.list);
    const error = useSelector((store) => store.products.error);
    const isLoading = useSelector((store) => store.products.isFetching);
    
    useEffect(() => {
        // trae la lista de produts cuando el store esta vacío
        if (!products.length) {
            // el dispatch ejecuta la acción asíncrona de redux para traer la lista de productos
            dispatch(getProducts());
        }
    }, [products]);

    if (error) {
        return <p>Error </p>
    }
  
    if (isLoading) {
        return <p>Loading... </p>
    }
  
    return (
      <section>
            {products.map((product) => {return (
                <p>{product.name}</p>
            )})}

            <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            console.log(products);
                        return (
                            <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>$ {product.price['$numberDecimal']}</td>
                            <td>{product.stock}</td>
                            <td >
                                <Link to={`/products/${product._id}`}>
                                <button>
                                    {/* <img src="/assets/icons/edit.svg" alt="update" /> */}
                                </button>
                                </Link>
                                <button
                                
                                onClick={() => {
                                    // setShowModal(true);
                                    // setProductId(product._id);
                                }}
                                >
                                {/* <img src="/assets/icons/trash.svg" alt="delete" /> */}
                                </button>
                            </td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
      </section>
    );
};
  export default Products;



