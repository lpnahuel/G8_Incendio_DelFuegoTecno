import {Route, Routes, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import UsersList from "../pages/users/UsersList"
import UserDetail from "../pages/users/UserDetail"
import ProductsList from "../pages/products/ProductsList"
import ProductDetail from "../pages/products/ProductDetail"
import CategoryList from "../pages/categories/CategoryList"


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/categories" element={<CategoryList />} />

        <Route path="/*" element={<Navigate to='/' />} />

    </Routes>
  )
}

export default AppRouter