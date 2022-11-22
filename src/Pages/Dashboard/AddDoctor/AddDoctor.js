import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();


    const { data: specialties = [], isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-sayem92.vercel.app/appointmentSpecialty`)
            const data = await res.json()
            return data;
        }
    });



    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.display_url
                    }

                    // sava information to the database----------
                    fetch(`https://doctors-portal-server-sayem92.vercel.app/doctors`, {
                        method: "POST",
                        headers: {
                            'content-type': "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} info save successful`);
                            navigate('/dashboard/manageDoctors');
                        })
                }
            })
    };




    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='pr-1 py-10'>
            <h2 className="text-3xl font-semibold ml-8 mb-4">Add A New Doctor</h2>
            <div className='md:w-96 p-7 shadow-xl mx-2'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Name</span>
                        </label>
                        <input type="text" {...register('name', {
                            required: "Please enter your name"
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your name" />

                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Email</span>
                        </label>
                        <input type="email" {...register('email', {
                            required: 'Email is required'
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your email" />

                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text ">Specialty</span>
                        </label>
                        <select {...register('specialty')}
                            className="select border border-gray-300 w-full max-w-xs">

                            {
                                specialties?.map(special =>
                                    <option
                                        key={special._id}
                                        value={special.name}
                                    >{special.name}</option>
                                )
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Photo</span>
                        </label>
                        <input type="file" {...register('image', {
                            required: "Please select your photo"
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your photo"
                        // accept="image/*"
                        // style={{display:'block'}}
                        />

                        {errors.img && <p className='text-red-600'>{errors.img.message}</p>}
                    </div>



                    <input className='mt-3 btn btn-accent text-white w-full max-w-xs' type="submit" value='Add A Doctor' />
                    <div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;