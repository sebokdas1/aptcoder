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
        const name = (e.target.name.value).lowercase();
        console.log(name)
        setEmployers(employers?.filter(a => a?.name === name))
    }
    return (
        <div className='listing-main'>
            <div className='form-container'>
                <form onSubmit={handleSearch}>
                    <input id='nameField' type="text" name="name" placeholder='search by name' required />
                    <input id='submit' type="submit" value="Search" />
                </form>
            </div>

            <div>
                <h2>Filter By: <button>FrontEnd Developer</button> <button>BackEnd Developer</button> <button>FullStack</button></h2>
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
                            <td>{employe?.name}</td>
                            <td>{employe?.post}</td>
                            <td>{employe?.age}</td>
                            <td>{employe?.city}</td>
                        </tr>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Listing;