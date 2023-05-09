import React from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolateCard = ({ chocolate, chocolates, setChocolates }) => {
  const { name, photo, country, category, _id } = chocolate;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        // )
        fetch(`http://localhost:5000/chocolates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount>0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success")
              const remaining = chocolates.filter(choc => choc._id !== _id);
              setChocolates(remaining)
             
            }
          });
      }
    });
  };

  return (
    <div className="mb-4  border rounded-lg p-6 bg-gradient-to-b">
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
        <img width={180}   layout="fill" objectFit="cover" src={photo} alt="" />
        
      </div>
      <div>
        <p>{name}</p>
        <p>{country}</p>
        <div className="flex space-x-3">
          <button
            onClick={() => handleDelete(_id)}
            className="bg-teal-700 border-none text-white tracking-widest uppercase px-4 rounded-lg "
          >
            delete
          </button>
         <Link to={`/detailschocolate/${_id}`}> <button className="bg-teal-700 border-none text-white tracking-widest uppercase px-4 rounded-lg ">
            Details
          </button></Link>
          <Link to={`/chocolates/${_id}`}>
            <button className="bg-teal-700 border-none text-white tracking-widest uppercase px-4 rounded-lg ">
              update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChocolateCard;
