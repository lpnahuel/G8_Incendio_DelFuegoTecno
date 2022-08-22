import Widget from '../components/Widget';
import '../index.css';
import ProductCard from '../components/ProductCard';
import UserCard from '../components/UserCard';
import { useApiFetchProduct } from '../hooks/useApiFetchProduct';
import { useState, useEffect } from 'react';

const Home = () => {

    const [lastProduct, setLastProduct] = useState([]);

    const { dataProduct } = useApiFetchProduct(`http://localhost:3030/api/products`);


    const { count, products, categories } = !!dataProduct && dataProduct;
    console.log(dataProduct)

    useEffect(() => {

        if (dataProduct) {
          setLastProduct(products[products.length - 1])

    
        }})
        console.log(lastProduct)
    
    return (
        <>
            <h2>Home</h2>
            <hr />
            <section className='homeSection'>
                <Widget />
                <Widget />
                <div className='infoWidget'>
                    <div className='infoWidget__item'>
                        <h4 className='item__title'>Total de productos por categoría</h4>
                        <hr />
                        <p className='item__text--bold'>Notebooks:</p>
                        <p className='item__text--bold'>Periféricos:</p>
                        <p className='item__text--bold'>Componentes:</p>
                        <p className='item__text--bold'>Accesorios:</p>
                        <p className='item__text--bold'>Sillas Gamer:</p>
                        <p className='item__text--bold'>Consolas:</p>
                        <p className='item__text--bold'>Almacenamiento:</p>

                    </div>
                </div>

                {/* Pondría una card con los datos del último producto creado y lo mismo con User */}
                {/* Y que vaya al detalle para no poner el link al p... */}
                <ProductCard />
                <UserCard />

            </section>
        </>
    )
}

export default Home