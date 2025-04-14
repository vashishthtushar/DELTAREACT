import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,345", "11,999", "2499", "599"];
  let newPrices = ["11,399", "8,999", "1599", "349"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
   [ "intutive surface", "designed for the ipad pro"],
    ["designed for ipad pro", "intutive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
