import Widget from '../components/Widget';
import '../index.css';
import LastProductCard from '../components/LastProductCard';
import LastUserCard from '../components/LastUserCard';
import { useAllProducts } from '../hooks/useAllProducts';
import { useAllUsers } from '../hooks/useAllUsers';
import { useState, useEffect } from 'react';

const Home = () => {

    const { dataProducts, isLoadingProducts } = useAllProducts(`https://g8incendio-dft.herokuapp.com/api/products`);
    const { count, products, categories } = !!dataProducts && dataProducts;
    const [lastProduct, setLastProduct] = useState([]);

    const { dataUsers, isLoadingUsers } = useAllUsers(`https://g8incendio-dft.herokuapp.com/api/users/list`);
    const { countUsers, user} = !!dataUsers && dataUsers;
    const [lastUser, setLastUser] = useState([]);


    useEffect(() => {
        if (dataProducts) {
            setLastProduct(products[products.length - 1])
        }
    }, [dataProducts, products, lastProduct]);


    useEffect(() => {
        if (dataUsers) {
            setLastUser(user[user.length - 1])
        }
    }, [dataUsers, lastUser, user]);


    console.log('dataProducts',dataProducts)
    console.log('products',products)
    console.log('dataUsers',dataUsers)
    console.log('user',user)
    console.log('lastUser',lastUser)

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
                    isLoading={isLoadingUsers}
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
                <LastProductCard
                    name={lastProduct.name}
                    price={lastProduct.price}
                    stock={lastProduct.stock}
                    category={lastProduct.category}
                    id={lastProduct.id}
                />
                <LastUserCard
                id = {lastUser.id}
                image = {lastUser.image}
                first_name = {lastUser.first_name}
                last_name = {lastUser.last_name}
                role = {lastUser.roles.name}
                    
                />

            </section>
        </>
    )
}

export default Home