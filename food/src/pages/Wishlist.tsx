import React, { useState, useEffect } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const currentWishList = JSON.parse(localStorage.getItem("wishList") || "[]");
    setWishlist(currentWishList);
  }, []);

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishlist.length > 0 ? (
          wishlist.map((item:any, index:number) => <li key={index}>{item}</li>)
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </ul>
    </div>
  );
}
