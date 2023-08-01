import React from 'react'
import ProductItem from './ProductItem'
const ProductList = (props) => {
    const { data, handleProductDetail, handleCarts } = props
    return (
        <div className="row">
            {data.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    handleProductDetail={handleProductDetail}
                    handleCarts={handleCarts}
                />
            ))}
        </div>
    )
}

export default ProductList
