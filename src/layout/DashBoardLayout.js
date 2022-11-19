import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);


    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}

                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && <>
                            
                            <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                            <li><Link to='/dashboard/addDoctors'>Add A Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;