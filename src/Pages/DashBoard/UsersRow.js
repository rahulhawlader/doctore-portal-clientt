import React from 'react';
import { toast } from 'react-toastify';

const usersRow = ({ user, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })

            .then(res => {
                if (res.status === 403) {
                    toast.error('Failled to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch('')
                    toast('Successfuly made in admin')
                }
            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>

            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make admin</button>}</td>
            <td><button class="btn btn-xs">Remove user</button></td>
        </tr>
    );
};

export default usersRow;