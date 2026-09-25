import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/asset/logo.png'
const Navbar = () => {
    return (
        <nav className='sticky z-100 bg-black border-b border-slate-800'>
            <div className="navbar shadow-sm max-w-300 mx-auto bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href='/'>Workouts</Link></li>
        <li><Link href='/'>My Plan</Link></li>
      </ul>
    </div>
    <Image src={logo} alt='logo'/>
    <Link href='/' className="btn btn-ghost text-xl text-white font-bold">FITLOG</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href='/' className='text-slate-300'>Workouts</Link></li>
      <li><Link href='/'  className='text-slate-300'>My Plan</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href='/' className="btn bg-black border-none">Plan <span className='text-black bg-yellow-300 rounded-full px-1.5'>0</span></Link>
    <Link href='/' className="btn text-slate-300 bg-black border-none">Saved <span className='text-white border-slate-700 border bg-black rounded-full px-1.5'>0</span></Link>
  </div>
</div>
        </nav>
    );
};

export default Navbar;