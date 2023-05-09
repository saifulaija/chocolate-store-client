import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import Swal from 'sweetalert2'

const AddChocolate = () => {


  const handleAddChocolate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolates = {name, country, category, photo}
        console.log(newChocolates);

        // sent data to the server

        fetch('http://localhost:5000/chocolates',{
                method:'POST',
                headers:{
                        'content-type':'application/json'
                },
                body:JSON.stringify(newChocolates)
        })
        .then(res=>res.json())
        .then(data=>{
                console.log(data);
                if(data.insertedId){
                        Swal.fire({
                                title: 'success!',
                                text: 'Chocolate added successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                              })
                }
        })

  }



  return (
    <div className="container mx-auto">
      <Link to="/">
        {" "}
        <button
          className="bg-[#A94B30] border
                   px-5 py-2 tracking-widest uppercase font-semibold text-white"
        >
          {" "}
          <HiArrowLeft className="inline-block"></HiArrowLeft> All Chocolates
        </button>{" "}
      </Link>

      <div className="bg-orange-50 p-10 mx-auto flex justify-center items-center">
        <form onSubmit={handleAddChocolate} className="w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="name"
                placeholder="chocolate name"
                className="input input-bordered w-1/2"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="country"
                placeholder="country"
                className="input input-bordered w-1/2"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-1/2"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered w-1/2"
              />
            </label>
          </div>
          
         
          <input type="submit" value='added chocolate' className="btn btn-wide mt-10" />
          
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
