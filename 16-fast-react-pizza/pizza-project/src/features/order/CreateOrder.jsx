import { useState } from "react";
import '../../../src/index.css';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="flex flex-col gap-5 m-auto mt-10 max-w-100">
      <h2>Ready to order? Let's go!</h2>

      <form>
        <div>
          <label>First Name</label>
          <input className="inputoo" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input className=""
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="w-10 h-10 accent-yellow-500 ring-offset-2" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button className="p-1 px-4 text-white transition-colors duration-300 bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600">Order now</button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
