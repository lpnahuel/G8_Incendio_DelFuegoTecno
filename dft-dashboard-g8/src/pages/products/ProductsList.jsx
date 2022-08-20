import '../../index.css';

import ProductCard from '../../components/ProductCard';

const ProductsList = () => {
  return (
    <section className='productList'>
        <h3>Products List</h3>
        <hr />

        <div className='productsListContainer'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>

    </section>
  )
}

export default ProductsList