'use client'

import {useEffect, useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink} from 'reactstrap'
import {NavLink as ReactLink, useLocation} from 'react-router-dom'
import '../css/Navbar6.css'
import logo from '../assests/logo.jpg'
import UserService from "../services/UserService";
import {FaUser} from "react-icons/fa";

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Our Team', href: '/about'},
    {name: 'Service', href: '/service'},
    {name: 'Resume', href: '/resume'},
    {name: 'Project', href: '/projects'},
    {name: 'Find Solution', href: '/problems'},
    {name: 'Contact', href: '/contact'},
]

export default function Navbar6() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const location = useLocation()

    const handleLogout = async () => {

        try {
            // Attempt to login and store token
            await UserService.logoutUser();
            window.location.reload();
            setIsAuthenticated(false); // Set auth state to false
            // Redirect to dashboard or home page, or set state to show user is logged in
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsAuthenticated(!!token)
    }, [])

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex items-center">
                        <NavItem className="nav-link">
                            <NavLink tag={ReactLink} to="/"
                                     className="flex items-center d-lg-none d-md-none d-sm-block">
                                <img src={logo} alt="Logo here" width={50}/>
                            </NavLink>
                        </NavItem>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-6 custom-navbar">
                        {navigation.map((item) => (
                            <NavItem key={item.name} className="nav-link">
                                <NavLink
                                    tag={ReactLink}
                                    to={item.href}
                                    className={`text-sm font-semibold leading-6 text-white rounded-md px-1 py-3 transition-colors duration-300 custom-item ${
                                        location.pathname === item.href ? 'custom-active-bg' : 'hover:bg-gray-50 hover:bg-opacity-20'
                                    }`}
                                >
                                    {item.name}
                                </NavLink>
                            </NavItem>
                        ))}

                        {isAuthenticated && (
                            <NavItem className="nav-link">
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                    <DropdownToggle
                                        tag="div"
                                        className={`flex items-center text-sm font-semibold rounded-full px-4 py-2 transition-all duration-300 gradient-toggle ${
                                            location.pathname.startsWith('/user/add-project') ||
                                            location.pathname.startsWith('/add-user') ||
                                            location.pathname.startsWith('/user/add-resume')
                                                ? 'gradient-active'
                                                : 'hover:opacity-90'
                                        } cursor-pointer`}
                                    >
                                        <div className="avatar-circle">
                                            <FaUser className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="ml-2 text-white">My Account</span>
                                    </DropdownToggle>
                                    <DropdownMenu className="glass-dropdown-menu">
                                        <DropdownItem tag={ReactLink} to="/user/add-resume" className="glass-dropdown-item">
                                            <span>Add Resume</span>
                                        </DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/user/resume-table" className="glass-dropdown-item">
                                            <span>Show all resumes</span>
                                        </DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/user/resume-uploader" className="glass-dropdown-item">
                                            <span>Upload resume</span>
                                        </DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/user/add-project" className="glass-dropdown-item">
                                            <span>Add Project</span>
                                        </DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/user/add-problem" className="glass-dropdown-item">
                                            <span>Add Problem</span>
                                        </DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/register" className="glass-dropdown-item">
                                            <span>Add User</span>
                                        </DropdownItem>
                                        <DropdownItem divider className="glass-divider" />
                                        <DropdownItem onClick={handleLogout} className="glass-dropdown-item logout-item">
                                            <span>Logout</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        )}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* Add content for large screens */}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <NavItem className="nav-link">
                                <NavLink tag={ReactLink} to="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img src={logo} alt="Logo here" className="h-10 w-auto"/>
                                </NavLink>
                            </NavItem>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <NavItem
                                            key={item.name}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            <NavLink tag={ReactLink} to={item.href}
                                                     className="text-sm font-semibold leading-6 text-gray-900">
                                                {item.name}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                    {isAuthenticated && (
                                        <>
                                            <NavItem
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                <NavLink tag={ReactLink} to="/user/add-project"
                                                         className="text-sm font-semibold leading-6 text-gray-900">
                                                    Add Project
                                                </NavLink>
                                            </NavItem>
                                            <NavItem
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                <NavLink tag={ReactLink} to="/user/add-problem"
                                                         className="text-sm font-semibold leading-6 text-gray-900">
                                                    Add Problem
                                                </NavLink>
                                            </NavItem>
                                            <NavItem
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                <NavLink tag={ReactLink} to="/register"
                                                         className="text-sm font-semibold leading-6 text-gray-900">
                                                    Add User
                                                </NavLink>
                                            </NavItem>
                                            <NavItem
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                <NavLink onClick={handleLogout}
                                                         className="text-sm font-semibold leading-6 text-gray-900">
                                                    Logout
                                                </NavLink>
                                            </NavItem>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    )
}