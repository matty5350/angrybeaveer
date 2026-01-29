import React from "react";
import Nav from "../components/Nav"; // navbar component
import "../globals.css"; // optional global styles

export const metadata = {
  title: "Angry Beaver Knifes",
  description: "Angry Beaver Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#fafafa",
          color: "#333",
        }}
      >
        {/* Navbar */}
        <header>
          <Nav />
        </header>

        {/* Main content */}
        <main style={{ padding: "2rem", minHeight: "80vh" }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            padding: "2rem",
            textAlign: "center",
            borderTop: "1px solid #ddd",
            backgroundColor: "#f8f8f8",
          }}
        >
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
