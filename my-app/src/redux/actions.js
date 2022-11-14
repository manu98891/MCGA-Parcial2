// Action type constants definitionN
export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const GET_PRODUCT_BY_ID_PENDING = 'GET_PRODUCT_BY_ID_PENDING';
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';
export const GET_PRODUCT_BY_ID_ERROR = 'GET_PRODUCT_BY_ID_ERROR';

export const CREATE_PRODUCT_PENDING = 'CREATE_PRODUCT_PENDING';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR';

export const UPDATE_PRODUCT_PENDING = 'UPDATE_PRODUCT_PENDING';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR';

export const DELETE_PRODUCT_PENDING = 'DELETE_PRODUCT_PENDING';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';

export const CLEAN_ERROR = 'CLEAN_ERROR';

export const CLEAN_SELECTED_ITEM = 'CLEAN_SELECTED_ITEM';

// Actions definition
export const getProductsPending = () => {
  return {
    type: GET_PRODUCTS_PENDING
  };
};

export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data
  };
};
export const getProductsError = (error) => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: error
  };
};

export const getProductByIdPending = () => {
  return {
    type: GET_PRODUCT_BY_ID_PENDING
  };
};

export const getProductByIdSuccess = (data) => {
  return {
    type: GET_PRODUCT_BY_ID_SUCCESS,
    payload: data
  };
};

export const getProductByIdError = (error) => {
  return {
    type: GET_PRODUCT_BY_ID_ERROR,
    payload: error
  };
};

export const createProductPending = () => {
  return {
    type: CREATE_PRODUCT_PENDING
  };
};

export const createProductSuccess = (data) => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: data
  };
};

export const createProductError = (error) => {
  return {
    type: CREATE_PRODUCT_ERROR,
    payload: error
  };
};

export const updateProductPending = () => {
  return {
    type: UPDATE_PRODUCT_PENDING
  };
};

export const updateProductSuccess = (data) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: data
  };
};

export const updateProductError = (error) => {
  return {
    type: UPDATE_PRODUCT_ERROR,
    payload: error
  };
};

export const deleteProductPending = () => {
  return {
    type: DELETE_PRODUCT_PENDING
  };
};

export const deleteProductSuccess = (id) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
  };
};

export const deleteProductError = (error) => {
  return {
    type: DELETE_PRODUCT_ERROR,
    payload: error
  };
};

export const cleanError = () => {
  return {
    type: CLEAN_ERROR
  };
};

export const cleanSelectedItem = () => {
  return {
    type: CLEAN_SELECTED_ITEM
  };
};
