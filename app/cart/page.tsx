import React from "react";

export default function Cart() {
  let cart = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>가격</p>
        <p>개수</p>
      </div>
      <CartItem item={cart[0]} />
    </div>
  );
}

function CartItem(props: any) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
