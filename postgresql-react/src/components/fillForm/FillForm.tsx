import React, { useState } from "react";

const RequestProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    quantity: 1,
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Request submitted for product: ${formData.productName}`);
    // כאן ניתן לשלב API לשליחה לשרת
  };

  return (
    <div >
      <h2 className="mb-4 text-center">Request a Product</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            placeholder="e.g. Organic Honey"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe what you're looking for..."
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="beverage">Beverage</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            min={1}
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Additional Notes
          </label>
          <textarea
            className="form-control"
            id="notes"
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Anything else we should know?"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestProductForm;
