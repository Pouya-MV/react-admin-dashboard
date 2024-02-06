import React, { useState, useContext } from 'react'
import './NewUser.css'
import { SidbarStatusContext } from '../../context/SidbarStatusContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewUser() {

    const notify = () => toast.success('User added (ckeck user list).', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const notifyError = () => toast.error('filled the * inputs first.', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const rowInfo = useContext(SidbarStatusContext)

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [age, setAge] = useState(null)
    const [password, setPassword] = useState(null)
    const [phone, setPhone] = useState(null)
    const [address, setAddress] = useState(null)



    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const phoneHandler = (event) => {
        setPhone(event.target.value)
    }

    const addressHandler = (event) => {
        setAddress(event.target.value)
    }


    const createUser = () => {



        if (firstName && lastName && age) {
            let newUser = {
                id: rowInfo.rowInfo.length + 1,
                image: 'image/admin.jpg',
                firstName,
                lastName,
                age
            }

            rowInfo.setRowInfo(prev => [...prev, newUser])
            notify()
            setFirstName('')
            setLastName('')
            setAge('')
            setPassword('')
            setPhone('')
            setAddress('')

        } else {
            notifyError()
        }



    }



    return (
        <>
            <div className="newuser-box">
                <div className="newuser-title">Add New User</div>
                <div className="newuser-inputs">
                    <div className="newuser-input">
                        <label>FirstName: *</label>
                        <input type="text" value={firstName} onChange={firstNameHandler} />
                    </div>
                    <div className="newuser-input">
                        <label>LastName: *</label>
                        <input type="text" value={lastName} onChange={lastNameHandler} />
                    </div>
                    <div className="newuser-input">
                        <label>Age: *</label>
                        <input type="text" value={age} onChange={ageHandler} />
                    </div>
                    <div className="newuser-input">
                        <label>Password:</label>
                        <input type="text" value={password} onChange={passwordHandler} />
                    </div>
                    <div className="newuser-input">
                        <label>Phone:</label>
                        <input type="text" value={phone} onChange={phoneHandler} />
                    </div>
                    <div className="newuser-input">
                        <label>Address:</label>
                        <input type="text" value={address} onChange={addressHandler} />
                    </div>
                </div>
                <button className="newuser-btn" onClick={createUser}>Create</button>
            </div>
            <ToastContainer />
        </>
    )
}
