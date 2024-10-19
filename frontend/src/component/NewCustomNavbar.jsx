import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min";
import {useState} from "react";
import {NavLink as ReactLink} from "react-router-dom";
import {Collapse, Nav, Navbar, NavItem, NavLink} from "reactstrap";
import '../css/Navbar.css'

export const Navbar5 = () => {
    const [login, setLogin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState();

    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark p-3 p-lg-0">
            <div className="hamburger-icon">
                {/* Add your hamburger icon for toggling the navbar */}
            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto navbar-nav mb-2 mb-lg-0" navbar>
                    <NavItem className="nav-link">
                        <NavLink tag={ReactLink} to="/">
                            Home
                        </NavLink>
                    </NavItem>

                    {!login ? (
                        <>
                            <NavItem className="nav-link navbar-list">
                                <NavLink tag={ReactLink} to="/about">
                                    About Us
                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-link">
                                <NavLink tag={ReactLink} to="/service">
                                    Service
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-link">
                                <NavLink tag={ReactLink} to="/resume">
                                    Resume
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-link">
                                <NavLink tag={ReactLink} to="/projects">
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-link">
                                <NavLink tag={ReactLink} to="/contact">
                                    Contact
                                </NavLink>
                            </NavItem>
                        </>
                    ) : (
                        <>
                            {isAdmin && (
                                <>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/users" className="nav-link">
                                            Users
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/settings" className="nav-link">
                                            Booked Rooms
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/add-room" className="nav-link">
                                            Add Room
                                        </NavLink>
                                    </NavItem>
                                </>
                            )}
                            <NavItem className="nav-link">
                                <NavLink tag={ReactLink} to="/my-rooms">
                                    My Rooms
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-link">
                                <NavLink onClick={() => {
                                    // Add sign out logic here
                                }}>
                                    Sign out
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-link">
                                <span>{user}</span>
                            </NavItem>
                        </>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    );
};
