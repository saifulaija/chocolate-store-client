import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedChocolate = () => {


        const loadedChocolate = useLoaderData();
        const [chocolate, setChocolate] = useState(loadedChocolate);

        const { name, photo, country, category,_id } = chocolate;



        
  const handleUpdateChocolate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolates = {name, country, category, photo}
        console.log(newChocolates);

        // sent data to the server

        fetch(`http://localhost:5000/chocolates/${_id}`,{
                method:'PUT',
                headers:{
                        'content-type':'application/json'
                },
                body:JSON.stringify(newChocolates)
        })
        .then(res=>res.json())
        .then(data=>{
                console.log(data);
                if(data.modifiedCount > 0){
                        Swal.fire({
                                title: 'success!',
                                text: 'Chocolate updated successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                              })
                }
        })

  }


        return (
               
      <div className="bg-orange-50 p-10 mx-auto flex justify-center items-center">

       
      <form onSubmit={handleUpdateChocolate} className="w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group ">
            <input
              type="text"
              name="name"
              placeholder="chocolate name"
              defaultValue={name}
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
              defaultValue={country}
              className="input input-bordered w-1/2"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group ">
            <input
              type="text"
              name="category"
              placeholder="category"
              defaultValue={category}
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
              defaultValue={photo}
              className="input input-bordered w-1/2"
            />
          </label>
        </div>
        
       
        <input type="submit" value='Update chocolate' className="btn btn-wide mt-10" />
        
      </form>
    </div>
        );
};

export default UpdatedChocolate;