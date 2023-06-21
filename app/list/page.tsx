"use client";
import { log } from "console";
import Image from "next/image";
import { useState } from "react";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  let [quantity, SetQuantity] = useState([0, 0, 0]);

  function quantityButton(index: number, sign: string) {
    let arr = [...quantity];
    if (sign === "+" && arr[index] >= 0) arr[index]++;
    else if (sign === "-" && arr[index] > 0) arr[index]--;
    SetQuantity(arr);
  }

  const productList = product.map((item, index) => {
    return (
      <div className="food" key={index}>
        <Image
          className="food-img"
          src={`/img/food${index}.png`}
          alt={`/img/food${index}.png`}
          width="400"
          height="400"
        />
        <h4>{item} </h4>
        <h5>(price)</h5>
        <button
          onClick={() => {
            quantityButton(index, "-");
          }}
        >
          -
        </button>
        <span> {quantity[index]} </span>
        <button
          onClick={() => {
            quantityButton(index, "+");
          }}
        >
          +
        </button>
      </div>
    );
  });

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {productList}
    </div>
  );
}
