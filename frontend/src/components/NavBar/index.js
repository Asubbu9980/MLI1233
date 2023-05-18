import React from 'react'
import { Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    <img src="https://cdn-icons-png.flaticon.com/512/2344/2344132.png" alt="Logo" width="60" height="60" className="d-inline-block align-text-top" />
                    <a className="navbar-brand ml-0" href="/">
                        Calculator Demo
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto gap-3" >
                       
                            <Nav.Link as={NavLink} to="/"  style={{ textDecoration: 'none', fontSize: 20 }}>Calculator</Nav.Link>
                            <Nav.Link as={NavLink}  to='history'  style={{ textDecoration: 'none', fontSize: 20 }} >History</Nav.Link>
                        
                         
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar