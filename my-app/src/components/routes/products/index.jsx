import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from './../../../redux/thunks';
import { cleanError } from './../../../redux/actions';
import store from '../../../redux/store';
import { useForm } from "react-hook-form";
import Button from '../../Sharedbuttons/buttons';
import Input from '../../SharedImputs/inputs';
import styles from './Products.module.css';
import Modal from '../../Sharedmodals';

const Products = () => {    //hace un get del dispatcher
    const dispatch = useDispatch();
    // busca el store
    const products = useSelector((store) => store.products.list);
    const error = useSelector((store) => store.products.error);
    const isLoading = useSelector((store) => store.products.isFetching);

    //modal
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);


    const {
        register, //Hook para tomar los inputs del form
        handleSubmit, //ejecuta el onSubmit
        formState: { errors },
      } = useForm();

      //AGREAGAR
      const onSubmit = (data) => {
        //funcion mia del onsubmit que le pasas al handleSubmit
        console.log(data);
      };
        //UPDATE
      const handleUpdateProduct = (id) => {
        console.log("update btn'");
        const product=products.filter((product)=>product._id===id);
        console.log(product);
        
      };
      //DELETE
      const handleDeleteProduct = (id) => {
        console.log(id);
       dispatch(deleteProduct(id));
        
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
      <section className={styles.body}>
        
            <table className={styles.table}>
                    <thead>
                        <tr>
                        <th className={styles.thead}>Name</th>
                        <th className={styles.theadprice}>Price</th>
                        <th>Stock</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {return (
                            <tr key={product._id}>
                            <td  className={styles.tbody}>{product.name}</td>
                            <td className={styles.tbody}>$ {product.price}</td>
                            <td className={styles.tbody}>{product.stock}</td>
                            <td >
                            <Button value="Update" onClick={()=>handleUpdateProduct(product._id)}/>
                            <Button value="Delete" onClick={()=>handleDeleteProduct(product._id)}/>
                            </td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
                
                <h3>Add a Product:</h3>
                <Button onClick={() => {
                        setIsAdding(true)
                    }}
                />
                <Modal isOpen={isAdding} title={"Add a Product"} 
                    handleClose={() => {
                            setIsAdding(false)
                        }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="text"
                            register={register}
                            label="Name:"
                            required={true}
                            errors={errors.name}
                        />
                        <Input
                            type="number"
                            register={register}
                            label="Price:"
                            required={true}
                            errors={errors.price}
                        />
                        <Input 
                            type="text"
                            register={register}
                            label="Stock:"
                            required={true}
                            errors={errors.stock} 
                        />
                        
                    </form>
                </Modal>
      </section>
    );
};
  export default Products;



