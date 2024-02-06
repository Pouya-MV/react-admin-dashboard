import Main from "../pages/main/Main"
import Product from "../pages/product/Product"
import User from "../pages/users/User"
import UserDetails from "../components/usreDetails/UserDetails"
import ProductDetails from "../components/productDetails/ProductDetails"
import NewUser from "../pages/newUser/NewUser"

let routes = [
    { path: '/', element: <Main /> },
    { path: '/product', element: <Product /> },
    { path: '/user', element: <User /> },
    { path: '/user/:id', element: <UserDetails /> },
    { path: '/product/:id', element: <ProductDetails /> },
    { path: '/newuser', element: <NewUser /> },
]

export default routes