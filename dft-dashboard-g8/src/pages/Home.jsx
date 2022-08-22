import Widget from '../components/Widget';
import '../index.css';
import LastProductCard from '../components/LastProductCard';
import UserCard from '../components/UserCard';
import { useAllProducts } from '../hooks/useAllProducts';
import { useAllUsers } from '../hooks/useAllUsers';
import { useState, useEffect } from 'react';

const Home = () => {

    const { dataProducts, isLoadingProducts } = useAllProducts(`https://g8incendio-dft.herokuapp.com/api/products`);
    const { count, products, categories } = !!dataProducts && dataProducts;
    const [lastProduct, setlastProduct] = useState("")

    const { dataUsers, isLoadingUsers } = useAllUsers(`https://g8incendio-dft.herokuapp.com/api/users/list`);
    const { countUsers, users, roles } = !!dataUsers && dataUsers;
    const [lastUser, setLastUser] = useState("")


    useEffect(() => {
        if (dataProducts) {
            setlastProduct(products[products.length - 1])
        }
    }, [products, dataProducts, lastProduct])


    useEffect(() => {

        if (lastUser) {
            setLastUser(users[users.length - 1])

        }

    }, [lastUser])

    return (
        <>
            <h2>Home</h2>
            <hr />
            <section className='homeSection'>
                <Widget
                    title='Productos'
                    quantity={count}
                    isLoading={isLoadingProducts}
                    link='/products'
                />
                <Widget
                    title='Usuarios'
                    quantity={countUsers}
                    isLoading={isLoadingProducts}
                    link='/users'
                />
                <div className='infoWidget'>
                    <div className='infoWidget__item'>
                        <h4 className='item__title'>Total de productos por categoría</h4>
                        <hr />
                        {categories ?
                            categories.map(category => {
                                return (
                                    <p className='item__text' key={category.id}>{category.name}: {category.products.length}</p>
                                )
                            })
                            :
                            (<p>No hay categorías</p>)

                        }


                    </div>
                </div>

                {/* Pondría una card con los datos del último producto creado y lo mismo con User */}
                {/* Y que vaya al detalle para no poner el link al p... */}
                <LastProductCard
                    name={lastProduct.name}
                    price={lastProduct.price}
                    stock={lastProduct.stock}
                    category={lastProduct.category}
                    id={lastProduct.id}
                />
                <UserCard />

            </section>
        </>
    )
}

export default Home