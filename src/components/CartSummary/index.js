import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-value">
              <span className="span">Order Total: </span>Rs {total} /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button
              className="checkout-btn d-sm-none"
              type="button"
              data-testid="remove"
            >
              Checkout
            </button>
          </div>
          <button
            className="checkout-btn d-lg-none"
            type="button"
            data-testid="remove"
          >
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
