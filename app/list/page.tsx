import Image from "next/image";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];

  const productList = product.map((item, index) => {
    return (
      <div className="food" key={index}>
        <img
          className="food-img"
          src={`/img/food${index}.png`}
          alt={`/img/food${index}.png`}
        />
        <h4>{item}</h4>
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
