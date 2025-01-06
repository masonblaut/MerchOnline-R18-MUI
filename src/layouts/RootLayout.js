import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import Navbar2 from './../Navbar2'

export default function RootLayout() {
    return (
        <div className="root-layout">
            <Navbar2 />
            <header>
                <nav>
                    {/* <NavLink to="/">Home</NavLink>
                    <NavLink to ="register">Register</NavLink>
                    <NavLink to ="login">Login</NavLink>
                    <NavLink to ="profile">Profile</NavLink>
                    <NavLink to ="cart">Cart</NavLink>
                    <NavLink to ="about">About</NavLink>
                    <NavLink to ="logout">Logout</NavLink> */}
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
            
        </div>
    )
}