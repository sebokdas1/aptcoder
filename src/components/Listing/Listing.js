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
    return (
        <div>
            <form action="">
                <input type="text" name="name" id="" />
                <input type="submit" value="Search" />
            </form>
            <div className='table-div'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Post</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                    {
                        employers.map(employe => <tr key={employe?.id}>
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