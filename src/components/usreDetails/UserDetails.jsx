import React, { useContext, useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { SidbarStatusContext } from '../../context/SidbarStatusContext';
import './UserDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function UserDetails() {

    const notify = () => toast.success('Edited successfully.', {
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

    let userId = useParams()

    let userIntended = rowInfo.rowInfo.filter(user => user.id == userId.id)
    let checkUser = rowInfo.rowInfo.some(user => user.id == userId.id)


    const [firstnamevalue, setFirstNamevalue] = useState(userIntended[0].firstName)
    const [lastnamevalue, setLastNamevalue] = useState(userIntended[0].lastName)
    const [agevalue, setAgeValue] = useState(userIntended[0].age)



    const changeFirstName = (event) => {
        setFirstNamevalue(event.target.value)
    }
    const changeLsatName = (event) => {
        setLastNamevalue(event.target.value)
    }
    const changeAge = (event) => {
        setAgeValue(event.target.value)
    }


    const saveChange = () => {
        const updateUsers = { ...rowInfo.rowInfo[userId.id - 1], firstName: firstnamevalue, lastName: lastnamevalue, age: agevalue }
        const updateArray = [...rowInfo.rowInfo]
        updateArray[userId.id - 1] = updateUsers
        rowInfo.setRowInfo(updateArray)

    }



    return (
        <>
            {!checkUser ? (
                <>
                    <Navigate to="/user" />
                </>
            ) : (
                <>
                    <div className="user-detail-box">
                        <p className="user-detail-title">Edit Users Info</p>
                        <div className="user-detail-top">
                            <img src={"../" + userIntended[0].image} alt="user-picture" className='user-detail-img' />
                            <MoreVertIcon className='user-detail-icon' />
                        </div>
                        <div className="user-detail-inputs">
                            <div className="">
                                <label className='user-detail-lable'>Picture</label>
                                <input type="text" className="user-detail-input img" value={userIntended[0].image} disabled />
                            </div>
                            <div className="">
                                <label className='user-detail-lable'>Firstname</label>
                                <input type="text" className="user-detail-input" value={firstnamevalue} onChange={changeFirstName} />
                            </div>
                            <div className="">
                                <label className='user-detail-lable'>Lastname</label>
                                <input type="text" className="user-detail-input" value={lastnamevalue} onChange={changeLsatName} />
                            </div>
                            <div className="">
                                <label className='user-detail-lable'>Age</label>
                                <input type="text" className="user-detail-input" value={agevalue} onChange={changeAge} />
                            </div>
                        </div>
                        <button className="user-detail-btn" onClick={() => { saveChange(); notify() }}>save changes</button>
                        <ToastContainer />
                    </div>
                </>
            )}
        </>
    )
}
