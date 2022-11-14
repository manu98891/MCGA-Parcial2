import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './../../../redux/thunks';
import { cleanError } from './../../../redux/actions';
import store from '../../../redux/store';
import { useForm } from "react-hook-form";
import Button from '../../Sharedbuttons/buttons';
import Input from '../../SharedImputs/inputs';

const Products = () => {    //hace un get del dispatcher
    const dispatch = useDispatch();
    // busca el store
    const products = useSelector((store) => store.products.list);
    const error = useSelector((store) => store.products.error);
    const isLoading = useSelector((store) => store.products.isFetching);
    
    const {
        register, //Hook de la libreria react-hook-form para registrar cada input del form
        handleSubmit, //Funcion para ejecutar el onSubmit del form
        formState: { errors }, //Manejo de errores del form
      } = useForm();

      const onSubmit = (data) => {
        //funcion tuya del onsubmit que le pasas al handleSubmit
        //AGREAGAR
        console.log(data);
      };
    
      const updateProduct = (id) => {
        console.log("update btn'");
        //UPDATE
        const product=products.filter((product)=>product._id===id);
        console.log(product);
        
      };
      const deleteProduct = () => {
        console.log("delete btn'");
        //DELETE
      };

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
                        {products.map((product) => {return (
                            <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>$ {product.price}</td>
                            <td>{product.stock}</td>
                            <td >
                            <Button value="Update" onClick={()=>updateProduct(product._id)}/>
                            <Button value="Delete"/>
                            </td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input //Componente custom de input q vos creaste
                        type="text"
                        register={register}
                        label="name"
                        required={true}
                        errors={errors.name}
                    />
                    <Input
                        type="number"
                        register={register}
                        label="price"
                        required={true}
                        errors={errors.price}
                    />
                    <Input type="text" register={register} label="stock" required={false} />
                    
                    <Button value="Submit" type="submit" />
                </form>
      </section>
    );
};
  export default Products;



