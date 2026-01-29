import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

// Function to get all products
async function getProducts() {
  const productsPath = path.join(process.cwd(), "content/products");
  const files = fs.readdirSync(productsPath);
  const products = files.map((filename) => {
    const filePath = path.join(productsPath, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { ...data, _sys: { filename } };
  });
  return products;
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
      }}
    >
      {products.map((product) => (
        <div
          key={product._sys.filename}
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          {product.image && (
            <Image src={product.image} alt={product.title} width={200} height={200} />
          )}
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
