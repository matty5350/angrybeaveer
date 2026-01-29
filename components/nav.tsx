import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/shop" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        <Link href="/">MyShop</Link>
      </div>

      {/* Nav links */}
      <div>
        {navItems.map((item, index) => (
          <span key={item.link} style={{ margin: "0 1rem" }}>
            <Link href={item.link} style={{ textDecoration: "none", color: "#333" }}>
              {item.title}
            </Link>
          </span>
        ))}
      </div>

      {/* Shopping basket */}
      <div style={{ fontSize: "1.5rem", cursor: "pointer" }}>
        <FiShoppingCart />
      </div>
    </nav>
  );
}
