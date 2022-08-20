import {Route, Routes, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import UsersList from "../pages/users/UsersList"
import UserDetail from "../pages/users/UserDetail"
import LastUser from "../pages/users/LastUser"
import ProductsList from "../pages/products/ProductsList"
import ProductDetail from "../pages/products/ProductDetail"
import LastProduct from "../pages/products/LastProduct"
import CategoryList from "../pages/categories/CategoryList"


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users/lastUser" element={<LastUser />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/lastProduct" element={<LastProduct />} />
        <Route path="/categories" element={<CategoryList />} />

        <Route path="/*" element={<Navigate to='/' />} />

    </Routes>
  )
}

export default AppRouter