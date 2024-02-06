import React, { useState, useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './User.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SidbarStatusContext } from '../../context/SidbarStatusContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'



export default function User() {


    const notify = () => toast.error('User deleted!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });


    const [columnData, setColumnData] = useState([
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'photo',
            headerName: 'photo',
            width: 100,
            renderCell: (params) => {
                return (
                    <div className='user-img-box'>
                        <img src={params.row.image} className="user-img" />
                    </div>
                )
            }
        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 100,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <div className="user-change">
                            <Link to={`/user/${params.row.id}`} className="user-link">
                                <button className='user-edit-btn'>Edit</button>
                            </Link>
                            <DeleteOutlineIcon
                                className="user-delete-btn"
                                onClick={() => { deleteUser(params.row.id); notify() }}
                            />
                        </div>
                    </>
                )
            }
        }
    ])

    const rowInfo = useContext(SidbarStatusContext)



    const deleteUser = (userId) => {
        rowInfo.setRowInfo(prev => prev.filter((user) => user.id != userId))
    }


    return (
        <>
            <div className="user-table-box">
                <DataGrid
                className='data-grid'
                    rows={rowInfo.rowInfo}
                    columns={columnData}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
            <ToastContainer />
        </>
    );
}







