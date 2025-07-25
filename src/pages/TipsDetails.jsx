import React from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { FaRegClock, FaUser } from 'react-icons/fa';
import { IoBookOutline } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const TipsDetails = () => {
    const details = useLoaderData()
    // console.log(details)


    const handleIncrementLike = () => {
        fetch(`https://gardening-server-theta.vercel.app/shareTips/${details._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },

        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Like added for this tip!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (


        <div className='container max-w-4xl mx-auto py-20 px-4'>
            <title>Tip Details</title>
            <div className="card bg-white border border-green-400 shadow-lg rounded-3xl p-8 text-center">

                <figure className="flex justify-center -mt-20 mb-6">
                    <div className="w-64 h-64 rounded-full border-4 border-white  overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            alt={details.title}
                            src={details.imageUrl}
                        />
                    </div>
                </figure>


                <h2 className="text-2xl font-bold text-gray-800 mb-10">{details.title}</h2>

                <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mb-10">
                    <div className='space-y-5'>
                        <p className='text-lg font-medium text-gray-700 flex items-center justify-center gap-3'>
                            <span className="bg-green-100 p-2 rounded-full text-green-600"><IoBookOutline /></span>
                            Plant Type: <span className='font-semibold text-green-600'>{details.plantType}</span>
                        </p>

                        <p className='text-lg font-medium text-gray-700 flex items-center justify-center gap-3'>
                            <span className="bg-green-100 p-2 rounded-full text-green-600"><BiSolidCategory /></span>
                            Category: <span className='font-semibold text-green-600'>{details.category}</span>
                        </p>
                    </div>

                    <div className='space-y-5'>
                        <p className='text-lg font-medium text-gray-700 flex items-center justify-center gap-3'>
                            <span className="bg-green-100 p-2 rounded-full text-green-600"><FaRegClock /></span>
                            Availability:
                            <span className={`font-semibold ${details.availability === 'public' ? 'text-green-600' : 'text-yellow-600'}`}>
                                {details.availability}
                            </span>
                        </p>

                        <p className='text-lg font-medium text-gray-700 flex items-center justify-center gap-3'>
                            <span className="bg-green-100 p-2 rounded-full text-green-600"><FaUser /></span>
                            Added by: <span className='font-semibold text-green-600'>{details.name}</span>
                        </p>
                    </div>
                </div>
                <div className='py-6'>
                    <p className='text-2xl font-bold py-2 text-gray-600'>Description: </p>
                    <p className='text-gray-600'>{details.description}</p>
                </div>

                <button onClick={handleIncrementLike} className="btn  w-full max-w-xs mx-auto  bg-gradient-to-br from-pink-500 via-red-400 to-rose-400  border-0 text-white text-lg font-semibold py-4 rounded-full shadow-md  transition-all hover:shadow-lg active:scale-95">
                    Like This Tip
                </button>
            </div>
        </div>



    );
};

export default TipsDetails;