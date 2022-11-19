import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);


    const closeModal = () => {
        setDeletingDoctor(null)
    };

    const handleDeletingDoctor = doctor => {
        console.log(doctor);
    };



    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {

                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err);
            }
        }
    })




    return (
        <div>
            <h2 className="text-3xl font-semibold ml-8 mb-4">Manage Doctors{doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td> {doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)}
                                        htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

             {/* open delete modal  */}
             
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                    closeModal={closeModal}
                    deletingDoctor={deletingDoctor}
                    handleDeletingDoctor={handleDeletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;