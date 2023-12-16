import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products/",
                );
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, []);
    return (
        <div className="center">
            <h1>All Products</h1>
            {products.map((product) => (
                <div style={{ width: "300px" }} key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img
                        style={{ width: "300px" }}
                        src={product.image}
                        alt="Product image"
                    />
                </div>
            ))}
        </div>
    );
}

export default App;
