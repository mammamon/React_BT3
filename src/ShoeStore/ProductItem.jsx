import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductItem = (props) => {
    const { product, handleProductDetail, handleCarts } = props
    return (
        <div className="col-4    mt-3">
            <div className="card">
                <img src={product.image} alt="..." />
                <div className="card-body">
                    <p className="fw-bold">{product.name}</p>
                    <p className="mt-3">{product.price}$</p>
                    <div className="mt-3 d-flex justify-content-between">
                        <button
                            className="btn btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#carts"
                            onClick={() => {
                                handleCarts(product)
                            }}
                        >
                            <FontAwesomeIcon icon={faShoppingCart}
                            className='me-2' 
                            />
                            Add To Cart
                        </button>
                        <button
                            className="btn btn-info text-white"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                                handleProductDetail(product)
                            }}
                        >
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
