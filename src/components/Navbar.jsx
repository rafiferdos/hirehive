import { Link, NavLink } from "react-router-dom"
import logo from '../assets/images/logo.png'

const Navbar = () => {

    const links =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>Home</a></NavLink>
            <NavLink to='/all_art_and_craft_items' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>All Art & Craft Items</a></NavLink>
            <NavLink to='/add_craft_item' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>Add Craft Item</a></NavLink>
            <NavLink to='/my_art_and_craft_list' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>My Art & Craft List</a></NavLink>
        </>

    return (
        <div className="shadow-xl sticky top-0 z-50">
            <div className="navbar bg-base-100 max-w-7xl mx-auto lg:py-6 py-4 w-11/12 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] shadow bg-base-100 rounded-box w-52 gap-4 p-4 *:font-semibold border border-purple-200">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost hover:bg-transparent flex items-center justify-center cursor-pointer">

                    <img className="h-10" src={logo} alt="" />
                    <a className=" text-xl bg-clip-text text-transparent bg-gradient-to-tr font-extrabold from-purple-800 to-purple-300">HireHive</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 *:lg:text-lg *:opacity-70 gap-6 *:font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar