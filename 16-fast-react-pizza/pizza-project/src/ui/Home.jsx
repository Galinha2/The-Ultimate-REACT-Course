import CreateUser from "../features/order/CreateUser"

function Home() {
  return (
    <div className="px-5 my-10 text-center">
      <h1 className="mb-10 text-2xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
