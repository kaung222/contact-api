import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className=" md:hidden flex items-center justify-around p-3 border-b-2">
        <Link to="/">
          <button className=" hover:text-blue-700  p-2">Dashboard</button>
        </Link>
        <Link to="/team">
          <button className=" hover:text-blue-700  p-2">Team</button>
        </Link>
        <Link to="/profile">
          <button className=" hover:text-blue-700  p-2">Profile</button>
        </Link>
        <button className=" hover:text-blue-700  p-2">Logout</button>
      </div>
    </div>
  )
}

export default Navbar