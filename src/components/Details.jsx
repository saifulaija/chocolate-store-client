import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
        const chocolate = useLoaderData();
        return (
                <div className='p-10 bg-gradient-to-b from-blue-500 w-1/2 m-auto border mt-20'>
                     <img width={30}  src={chocolate.photo} alt="" />
                     <p>{chocolate.name}</p>
                     <p>{chocolate.country}</p>
                     <Link to='/'>Back To Home</Link>

                </div>
        );
};

export default Details;