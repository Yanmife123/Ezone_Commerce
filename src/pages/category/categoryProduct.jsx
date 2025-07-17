import React, { useEffect, useState } from "react";

const CategoryProduct = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      setError("");
    };

    if (categoryId) fetchCategoryProducts();
  }, [categoryId]);

  if (loading) return <div>Loading category products...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  const prodData = [
    {
      id: 1,
      name: "Sample Product 1",
      price: 19.99,
      image: "",
      shortDescription: "Short description for product 1",
    },
    {
      id: 2,
      name: "Sample Product 2",
      price: 29.99,
      image: "",
      shortDescription: "Short description for product 2",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {/* {category && (
        <div style={{ marginBottom: 24 }}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      )} */}
      <h3>Products</h3>
      {prodData.length === 0 ? (
        <div>No products found in this category.</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #eee",
                borderRadius: 8,
                padding: 16,
                width: 220,
                boxShadow: "0 2px 8px #f0f0f0",
              }}
            >
              <img
                src={product.image || "https://via.placeholder.com/200"}
                alt={product.name}
                style={{
                  width: "100%",
                  height: 120,
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              />
              <h4 style={{ margin: "12px 0 6px" }}>{product.name}</h4>
              <p style={{ margin: 0, color: "#888" }}>
                {product.price ? `$${product.price}` : "Price N/A"}
              </p>
              <p style={{ fontSize: 13, color: "#555" }}>
                {product.shortDescription}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
