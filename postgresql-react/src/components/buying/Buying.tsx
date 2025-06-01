import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const PurchaseProduct: React.FC = () => {
  const product: Product = {
    id: 1,
    name: "Organic Olive Oil",
    description: "High-quality cold-pressed olive oil from Greece.",
    price: 49.99,
    imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/jov/jov01500/y/8.jpg",
  };

  const [quantity, setQuantity] = useState<number>(1);

  const handleBuy = () => {
    alert(`You bought ${quantity} of "${product.name}" for ₪${(quantity * product.price).toFixed(2)}`);
    // Here you can call backend API or handle cart logic
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={product.imageUrl}
              className="img-fluid rounded-start"
              alt={product.name}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text text-muted">{product.description}</p>
              <h4 className="text-primary mb-3">₪{product.price.toFixed(2)}</h4>

              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control"
                  style={{ width: "100px" }}
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>

              <button className="btn btn-success w-100" onClick={handleBuy}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
