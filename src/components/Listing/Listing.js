import React, { useEffect } from 'react';
import { useState } from 'react';
import './Listing.css'

const Listing = () => {
    const [employers, setEmployers] = useState([])
    useEffect(() => {
        fetch('employer.json')
            .then(res => res.json())
            .then(data => setEmployers(data))
    }, [])
    const handleSearch = (e) => {
        e.preventDefault()
        const name = e.target.name.value.toLowerCase();
        setEmployers(employers?.filter(a => a?.name === name))
    }
    const frontend = () => {
        setEmployers(employers.filter(e => e.post === 'front end developer'))
    }
    const backend = () => {
        setEmployers(employers.filter(e => e.post === 'back end developer'))
    }
    const web = () => {
        setEmployers(employers.filter(e => e.post === 'web developer'))
    }
    const fullStack = () => {
        setEmployers(employers.filter(e => e.post === 'full stack developer'))
    }
    return (
        <div className='listing-main'>
            <div className='form-container'>
                <form onSubmit={handleSearch}>
                    <input id='nameField' type="text" name="name" placeholder='search by name' required />
                    <input id='submit' type="submit" value="Search" />
                </form>
            </div>

            <div className='filter'>
                <h2>Filter By:</h2>
                <div class="dropdown">
                    <button class="dropbtn">POST</button>
                    <div class="dropdown-content">
                        <p onClick={frontend}>Frontend</p>
                        <p onClick={backend}>Backend</p>
                        <p onClick={web}>Web</p>
                        <p onClick={fullStack}>FullStack</p>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">AGE</button>
                    <div class="dropdown-content">
                        <p >20 - 29</p>
                        <p >30 - 39</p>
                        <p >40 - 50</p>
                    </div>
                </div>

            </div>
            <div className='table-div'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Post</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                    {
                        employers?.map(employe => <tr key={employe?.id}>
                            <td>{employe?.name?.toUpperCase()}</td>
                            <td>{employe?.post?.toUpperCase()}</td>
                            <td>{employe?.age}</td>
                            <td>{employe?.city?.toUpperCase()}</td>
                        </tr>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Listing;