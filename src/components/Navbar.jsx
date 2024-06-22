import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = ({ setSearchQuery }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('bg-dark', 'text-light');
            document.body.classList.remove('bg-light', 'text-dark');
        } else {
            document.body.classList.add('bg-light', 'text-dark');
            document.body.classList.remove('bg-dark', 'text-light');
        }
    }, [darkMode]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(query);
        navigate('/'); // Navigate to home or relevant page to display search results
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <h4 style={{ fontSize: '50px', color: 'green' }}>News Hub</h4>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <button type="button" className="btn btn-warning">Home</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/General">
                                <button type="button" className="btn btn-warning">General</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Business">
                                <button type="button" className="btn btn-warning">Business</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Technology">
                                <button type="button" className="btn btn-warning">Technology</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Entertainment">
                                <button type="button" className="btn btn-warning">Entertainment</button>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex ms-3" role="search" onSubmit={handleSearchSubmit}>
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button className="btn btn-secondary ms-3" style={{color: "white", background:"blueviolet"}} onClick={() => setDarkMode(!darkMode)}>
                        <i className="bi bi-moon-stars"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
