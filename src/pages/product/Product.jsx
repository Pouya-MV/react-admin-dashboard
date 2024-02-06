import React, { useState, useContext } from 'react'
import './Product.css'
import { DataGrid } from '@mui/x-data-grid';
import '../users/User.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SidbarStatusContext } from '../../context/SidbarStatusContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function Product() {

  const notify = () => toast.error('product deleted!', {
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
          <div className='product-img-box'>
            <img src={params.row.image} className="product-img" />
          </div>
        )
      }
    },
    {
      field: 'productName',
      headerName: 'product Name',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'price',
      width: 150,
    },
    {
      field: 'inventory',
      headerName: 'inventory',
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
              <Link to={`/product/${params.row.id}`} className="user-link">
                <button className='product-edit-btn'>Details</button>
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

  const productrow = useContext(SidbarStatusContext)



  const deleteUser = (userId) => {
    productrow.setProductRow(prev => prev.filter((user) => user.id != userId))
  }

  return (
    <>
      <div className="product-table-box">
        <DataGrid
          className='data-grid'
          rows={productrow.productrow}
          columns={columnData}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
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
  )
}
