import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {

    const {user, signOutUser} = use(AuthContext)

    const links = <>
    
    <li><NavLink to='/' >Home</NavLink></li>
    {
      user && <li><NavLink to={`/myApplications/${user?.email}`} >My-Applications</NavLink></li>
    }
     {
      user && <>
      <li><NavLink to='/addJobs'>Add-Jobs</NavLink></li>
      <li><NavLink to='/myPostedJobs'>My Posted-Jobs</NavLink></li>
      
      </>
    } 
    </>

    const handleSignOut =()=>{
        signOutUser().then(()=>{
            alert('sign out ok')
        }).catch(error =>{
            console.log(error);
        })
    }


    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? <>
    <button onClick={handleSignOut} className='btn'>Sign Out</button>
    </> : <>
    <NavLink to='/register' className='btn  bg-blue-500 text-white' >Register</NavLink>
   <NavLink to='/signin' className='btn  bg-blue-500 text-white' >Sign In</NavLink>
    </>
  }
  </div>
</div>
    );
};

export default Navbar;