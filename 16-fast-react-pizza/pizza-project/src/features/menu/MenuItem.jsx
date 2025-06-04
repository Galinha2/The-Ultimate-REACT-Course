import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="grid grid-cols-[auto_1fr_auto] gap-5 p-5 text-2xl border-b">
      <img className="h-40" src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className="mt-10">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
      <button className="h-10 p-1 px-4 m-auto text-white transition-colors duration-300 bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600">
        Order now
      </button>
    </li>
  );
}

export default MenuItem;
