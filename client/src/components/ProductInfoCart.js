import React from 'react';

const ProductInfoCart = (props) => {
    return (
        <div className="product-info-column-two">
            <div className="product-info-price-match-guarantee">
                <span className="product-info-price-logo">
                <i className="fas fa-dollar-sign"></i>
                </span>
                <span className="product-info-price-match-guarantee-span">
                Price Match Guarantee
                </span>
            </div>
            <div className="product-info-price">
                <span className="product-info-price-span">
                ${props.productInfoCartProp.price}
                </span>
            </div>
            <div className="product-info-open-box-option">
                <span className="product-info-open-box-label">Open-Box:</span>
                <span className="product-info-open-box-price"> from $XX.XX</span>
            </div>
            <div className="product-info-variations">
                <div className="product-info-variations-header">
                <label className="product-info-variations-label">-- Product Options --</label>
                </div>
            </div>
            <div className="product-info-fulfillment">
                <div className="product-info-fulfillment-option-one">FREE Shipping: Get it by Thu, Dec 12</div>
                <div className="product-info-fulfillment-option-two"><strong>Want it tomorrow? </strong>Choose Next-Day Delivery in checkout to 73301.</div>
                <div className="product-info-fulfillment-option-three"> <strong>Store Pickup:</strong>Order now and South Austin will have it ready for pickup by Thu, Dec 12. Available today at a store 9 miles away.</div>
            </div>


            <div className="product-info-cart">
                <button className="product-info-cart-button"><i className="fas fa-shopping-cart"></i>Add to Wagon</button>
                <div className="product-info-cart-aux">
                <div className="product-info-compare">
                    <i className="product-info-compare-checkbox"></i>
                    <span className="product-info-compare-text">
                    Compare
                    </span>
                </div>
                <div className="product-info-save">
                    <div className="product-info-save-for-later">
                    <i className="far fa-bookmark"></i>
                    <button className="product-info-save-for-later-button">
                        Save
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoCart;

