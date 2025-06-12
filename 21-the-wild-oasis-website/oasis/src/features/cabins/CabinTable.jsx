import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { getCabins } from "../../services/apiCabins";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const createCabin = async (newCabin) => {
  const response = await fetch(
    "https://yahvestqthzyfwtrnbho.supabase.co/rest/v1/cabins",
    {
      method: "POST",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhaHZlc3RxdGh6eWZ3dHJuYmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMDQwNzksImV4cCI6MjA2NDc4MDA3OX0.NR7lNIo7OBv4CYewhgUvg8qCnirwSGaLpX-DfBixTG4",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhaHZlc3RxdGh6eWZ3dHJuYmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMDQwNzksImV4cCI6MjA2NDc4MDA3OX0.NR7lNIo7OBv4CYewhgUvg8qCnirwSGaLpX-DfBixTG4",
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(newCabin),
    }
  );
  return response.json();
};

const deleteCabin = async (id) => {
  const response = await fetch(
    `https://yahvestqthzyfwtrnbho.supabase.co/rest/v1/cabins?id=eq.${id}`,
    {
      method: "DELETE",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhaHZlc3RxdGh6eWZ3dHJuYmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMDQwNzksImV4cCI6MjA2NDc4MDA3OX0.NR7lNIo7OBv4CYewhgUvg8qCnirwSGaLpX-DfBixTG4",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhaHZlc3RxdGh6eWZ3dHJuYmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMDQwNzksImV4cCI6MjA2NDc4MDA3OX0.NR7lNIo7OBv4CYewhgUvg8qCnirwSGaLpX-DfBixTG4",
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

function CabinTable() {
  
  const { mutate } = useMutation({ mutationFn: createCabin});
  const [name, setname] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const queryClient = useQueryClient();
  
  const deleteMutation = useMutation({
  mutationFn: deleteCabin,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cabin"] }),
});
  const handleCreateCabin = (e) => {
    e.preventDefault();
    mutate(
  {
    name: name,
    maxCapacity: maxCapacity,
    regularPrice: regularPrice,
    discout: discount,
    description: description,
    image: image,
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      setname("");
      setMaxCapacity("");
      setRegularPrice("");
      setDiscount("");
      setDescription("");
      setImage("");
    },
  }
);
}
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <form action="post">
        <input
        value={name}
          className="m-1 rounded-full inp"
          type="text"
          placeholder="name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
        value={maxCapacity}
          className="m-1 rounded-full inp"
          type="text"
          placeholder="max capacity"
          onChange={(e) => setMaxCapacity(e.target.value)}
        />
        <input
        value={regularPrice}
          className="m-1 rounded-full inp"
          type="text"
          placeholder="regular price"
          onChange={(e) => setRegularPrice(e.target.value)}
        />
        <input
        value={discount}
          className="m-1 rounded-full inp"
          type="text"
          placeholder="discount"
          onChange={(e) => setDiscount(e.target.value)}
        />
        <input
        value={description}
          className="m-1 rounded-full inp"
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={image}
          className="m-1 rounded-full inp"
          type="text"
          placeholder="image link"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="button" className="btn-blue" onClick={handleCreateCabin}>
          create cabin
        </button>
      </form>

      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <div className="my-5 border">
          <p
            className="text-2xl text-yellow-500 uppercase border-b border-stone-900"
            key={cabin.id}
          >
            {cabin.name}
          </p>
          <p className="text-sm" key={cabin.id}>
            capacity: {cabin.maxCapacity}
          </p>
          <p className="text-sm" key={cabin.id}>
            price: {cabin.regularPrice}
          </p>
          <p className="text-sm" key={cabin.id}>
            discount: {cabin.discout}
          </p>
          <p className="text-sm" key={cabin.id}>
            description: {cabin.description}
          </p>
          <button className="h-10 p-0 px-5 m-0 text-sm rounded-full btn-blue" onClick={() => deleteMutation.mutate(cabin.id)}>Delete</button>
        </div>
      ))};
    </Table>
  );
}

export default CabinTable;
