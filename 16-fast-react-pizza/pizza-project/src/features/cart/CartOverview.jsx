import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between p-4 mb-4 text-sm uppercase bg-stone-800 text-stone-200 md:text-base">
      <p>
        <span className="text-stone-300">23 pizzas</span>
        <span> $23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
