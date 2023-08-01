import React, { useState, useReducer } from 'react';
import data from './data.json';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

const cartReducer = (state, action) => {
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            index = state.findIndex((item) => item.id === action.product.id);
            if (index !== -1) {
                state[index].cartQuantity += 1;
            } else {
                state.push({ ...action.product, cartQuantity: 1 });
            }
            return [...state];
        case 'UPDATE_CART_QUANTITY':
            index = state.findIndex((item) => item.id === action.id);
            state[index].cartQuantity = state[index].cartQuantity + action.quantity || 1;
            return [...state];
        case 'DELETE_FROM_CART':
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
};


const ShoeStore = () => {
    const [productDetail, setProductDetail] = useState(data[0]);
    const [carts, dispatch] = useReducer(cartReducer, []);

    const handleProductDetail = (product) => {
        setProductDetail(product);
    };

    const handleCarts = (product) => {
        dispatch({ type: 'ADD_TO_CART', product });
    };

    const handleCartQuantity = (id, quantity) => {
        dispatch({ type: 'UPDATE_CART_QUANTITY', id, quantity });
    };

    const handleDeleteCart = (id) => {
        dispatch({ type: 'DELETE_FROM_CART', id });
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between">
                <h1>ShoeStore</h1>
                <button
                    className="btn btn-outline-success"
                    data-bs-toggle="modal"
                    data-bs-target="#carts"
                >
                    Cart
                </button>
            </div>
            <ProductList
                data={data}
                handleProductDetail={handleProductDetail}
                handleCarts={handleCarts}
            />

            <ProductDetail productDetail={productDetail} />

            <Cart
                carts={carts}
                handleCartQuantity={handleCartQuantity}
                handleDeleteCart={handleDeleteCart}
            />
        </div>
    );
};

export default ShoeStore;
