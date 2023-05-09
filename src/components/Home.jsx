import React, { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { Link, useLoaderData } from "react-router-dom";
import ChocolateCard from "./ChocolateCard";

const Home = () => {
  const loadedChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadedChocolates);

  return (
    <div className="container mx-auto mt-40">
      <Link to="/addchocolate">
        {" "}
        <button
          className="bg-[#A94B30] border
                   px-5 py-2"
        >
          {" "}
          <HiPlus className="inline-block"></HiPlus> Add Chocolate
        </button>{" "}
      </Link>
      <h2>Chocolates collection : {chocolates.length}</h2>
      <div className="mb-4 grid md:grid-cols-3 gap-4">
        {chocolates.map((chocolate) => (
          <ChocolateCard
            key={chocolate._id}
            chocolate={chocolate}
            chocolates={chocolates}
            setChocolates={setChocolates}
          ></ChocolateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
