import React, { useState } from 'react'
import Trending from "./components/trending";
import Latest from "./components/latest";
import Company from "./components/company";

const Navbar = () => {
    const [contentType, setContentType] = useState(
        'trendings',
        'latest',
        'company'
    )
    return (
        <div className="main-content-Navbar">
            <div className="wrapper">
                <ul>
                    <li><button onClick={() => setContentType('trendings')}>Trendings</button></li>
                    <li><button onClick={() => setContentType('latest')}>Latest</button></li>
                    <li><button onClick={() => setContentType('company')}>Company</button></li>
                </ul>
                {contentType === 'trendings' && <><Trending /></>}
                {contentType === 'latest' && <><Latest /></>}
                {contentType === 'company' && <><Company /></>}
            </div>
        </div>
    )
}
export default Navbar





