import {
    getProductsPending,
    getProductsSuccess,
    getProductsError,
    createProductPending,
    createProductSuccess,
    createProductError,
    updateProductPending,
    updateProductSuccess,
    updateProductError,
    getProductByIdPending,
    getProductByIdSuccess,
    getProductByIdError,
    deleteProductPending,
    deleteProductSuccess,
    deleteProductError
  } from './actions';
  
  // Async Actions definition
  export const getProducts = () => {
    return (dispatch) => {
      // Dispatch (execute) the redux action to indicate the request will start
      dispatch(getProductsPending());
      // Make the backend request
      return fetch(`${process.env.REACT_APP_API}/products`)
        .then((response) => {
          if (response.status !== 200) {
            return response.json().then(({ message }) => {
              throw new Error(message);
            });
          }
          return response.json();
        })
        .then((response) => {
          // Dispatch (execute) the redux action to save the response in Redux
          //payload
          dispatch(getProductsSuccess(response.data));
        })
        .catch((error) => {
          // Dispatch (execute) the redux action to save the error in Redux
          // Remember always save an string, it is guaranteed using "error.toString()"
          dispatch(getProductsError(error.toString()));
        });
    };
  };
  
  // See the comments above for reference.
  // On this case, we are passing an "id" params to send it to the backend
  export const getProductById = (id) => {
    return (dispatch) => {
      dispatch(getProductByIdPending());
      return fetch(`${process.env.REACT_APP_API}/products?_id=${id}`)
        .then((response) => {
          if (response.status !== 200) {
            return response.json().then(({ message }) => {
              throw new Error(message);
            });
          }
          return response.json();
        })
        .then((response) => {
          dispatch(getProductByIdSuccess(response.data[0]));
          // it is necessary to return the response to get it on the ".then" in
          // the component when the action is dispatched
          return response.data[0];
        })
        .catch((error) => {
          dispatch(getProductByIdError(error.toString()));
        });
    };
  };
  
  export const createProduct = (values) => {
    return (dispatch) => {
      dispatch(createProductPending());
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      };
      return fetch(`${process.env.REACT_APP_API}/products`, options)
        .then((response) => {
          if (response.status !== 201) {
            return response.json().then(({ message }) => {
              throw new Error(message);
            });
          }
          return response.json();
        })
        .then((response) => {
          dispatch(createProductSuccess(response.data));
          return response.data;
        })
        .catch((error) => {
          dispatch(createProductError(error.toString()));
        });
    };
  };
  
  export const updateProduct = (id, values) => {
    return (dispatch) => {
      dispatch(updateProductPending());
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      };
      return fetch(`${process.env.REACT_APP_API}/products/${id}`, options)
        .then((response) => {
          if (response.status !== 200) {
            return response.json().then(({ message }) => {
              throw new Error(message);
            });
          }
          return response.json();
        })
        .then((response) => {
          dispatch(updateProductSuccess(response.data));
          return response.data;
        })
        .catch((error) => {
          dispatch(updateProductError(error.toString()));
        });
    };
  };
  
  export const deleteProduct = (id) => {
    return (dispatch) => {
      dispatch(deleteProductPending());
      return fetch(`${process.env.REACT_APP_API}/products/${id}`, { method: 'DELETE' })
        .then((response) => {
          if (response.status !== 204) {
            return response.json().then(({ message }) => {
              throw new Error(message);
            });
          }
          dispatch(deleteProductSuccess(id));
        })
        .catch((error) => {
          dispatch(deleteProductError(error.toString()));
        });
    };
  };