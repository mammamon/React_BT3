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
                return state.map((item) =>
                    item.id === action.product.id
                        ? { ...item, cartQuantity: item.cartQuantity + 1 }
                        : item
                );
            } else {
                return [...state, { ...action.product, cartQuantity: 1 }];
            }
        case 'UPDATE_CART_QUANTITY':
            return state.map((item) =>
                item.id === action.id ? { ...item, cartQuantity: action.quantity } : item
            );
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

        <div className="container mt-5 d-flex">
            <div className="menu col-3 d-flex justify-content-center align-items-center me-4">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Shop</a>
                    </li>
                </ul>
            </div>
            <div classNAme="col-9">
                <div className="d-flex justify-content-center">
                    <h1 className='m-auto'>Shoe Shop</h1>
                    <button
                        className="btn btn-outline-success"
                        data-bs-toggle="modal"
                        data-bs-target="#carts"
                    >
                        Giỏ hàng
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
        </div>
    );
};

export default ShoeStore;
