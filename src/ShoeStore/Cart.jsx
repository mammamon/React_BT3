import React from 'react';

const Cart = ({ carts, handleCartQuantity, handleDeleteCart }) => {
  console.log('carts: ', carts);
  return (
    <div
      className="modal fade"
      id="carts"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Giỏ hàng
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {carts.length ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart, index) => {
                    return (
                      <tr key={cart.id}>
                        <td>{index + 1}</td>
                        <td>{cart.name}</td>
                        <td>
                          <img
                            style={{
                              width: 80,
                              height: 80,
                            }}
                            className="img-fluid"
                            src={cart.image}
                            alt="..."
                          />
                        </td>
                        <td>{cart.price}</td>
                        <td>
                          <input
                            type="number"
                            min="1"
                            value={cart.cartQuantity}
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value, 10);
                              handleCartQuantity(cart.id, newQuantity);
                            }}
                          />
                        </td>
                        <td>{cart.cartQuantity * cart.price}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleDeleteCart(cart.id);
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h2 className="text-center">Vui lòng chọn sản phẩm</h2>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
