import { Link, NavLink } from "react-router-dom"
import logo from '../assets/images/logo.png'
import blankUser from '../assets/images/blank_user.jpg'
import { LuUserPlus2 } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const { theme, setTheme } = useContext(ThemeContext)
    const handleThemeChange = (e) => {
        setTheme(e.target.value)
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const links =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>Home</a></NavLink>
            <NavLink to='/add_jobs' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>Add Jobs</a></NavLink>
            {/* <NavLink to='/my_posted_jobs' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>My Posted Jobs</a></NavLink>
            <NavLink to='/my_bids' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>My Bids</a></NavLink> */}
            <NavLink to='/bid_requests' className={({ isActive }) => isActive ? "text-purple-500 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-300"}><a>Bid Requests</a></NavLink>
        </>

    return (
        <div className="shadow-xl sticky top-0 z-50 bg-base-100">
            <div className="navbar max-w-7xl mx-auto lg:py-6 py-4 w-11/12 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] shadow bg-base-100 rounded-box w-52 gap-3 p-4 *:font-semibold border border-purple-200">
                            {links}
                            <hr className="my-1" />
                            <div className="dropdown md:hidden block">
                                <div tabIndex={0} role="button" className="btn btn-xs text-sm px-0 py-0 m-1 btn-ghost hover:bg-transparent border" onClick={toggleDropdown}>
                                    Theme
                                    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                                </div>
                                {
                                    isDropdownOpen &&
                                    (
                                        <ul tabIndex={0} className="dropdown-content z-[150] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" onChange={handleThemeChange} value="light" /></li>
                                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" onChange={handleThemeChange} value="dark" /></li>
                                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Synthwave" onChange={handleThemeChange} value="synthwave" /></li>
                                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" onChange={handleThemeChange} value="retro" /></li>
                                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" onChange={handleThemeChange} value="cyberpunk" /></li>
                                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" onChange={handleThemeChange} value="valentine" /></li>
                                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" onChange={handleThemeChange} value="aqua" /></li>
                                        </ul>
                                    )
                                }
                            </div>
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
                    <div className="dropdown hidden md:block">
                        <div tabIndex={0} role="button" className="btn m-1 btn-ghost hover:bg-transparent">
                            Theme
                            <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" onChange={handleThemeChange} value="light" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" onChange={handleThemeChange} value="dark" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Synthwave" onChange={handleThemeChange} value="synthwave" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" onChange={handleThemeChange} value="retro" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" onChange={handleThemeChange} value="cyberpunk" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" onChange={handleThemeChange} value="valentine" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Lemonade" onChange={handleThemeChange} value="lemonade" /></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Halloween" onChange={handleThemeChange} value="halloween" /></li>
                        </ul>
                    </div>
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom items-center flex"  data-tip={user?.displayName || "No Username"}>
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL || blankUser} referrerPolicy="no-referrer"/>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">

                                        <li><NavLink to='/my_posted_jobs'>My Posted Jobs</NavLink></li>
                                        <li><NavLink to='/my_bids'>My Bids</NavLink></li>
                                        <li onClick={logOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <Link to='/login' className="btn btn-ghost hover:bg-transparent hover:bg-base-200"><LuUserPlus2 className="text-xl" /><p>Login</p></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar