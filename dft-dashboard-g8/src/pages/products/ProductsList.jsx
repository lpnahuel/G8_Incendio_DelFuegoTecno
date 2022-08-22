import '../../index.css';
import { useAllProducts } from '../../hooks/useAllProducts';

import ProductCard from '../../components/ProductCard';

const ProductsList = () => {


  const { dataProducts, isLoadingProducts } = useAllProducts(`https://g8incendio-dft.herokuapp.com/api/products`);
  const { products } = !!dataProducts && dataProducts;

  return (
    <section className='productList'>
      <h3>Products List</h3>
      <hr />

      <div className='productsListContainer'>

        {
          isLoadingProducts ?
            (
              <section>
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </section>

            ) : (

              products.map(product => {
                return (
                  <ProductCard product={product} key={product.id} />
                )
              })
            )
        }

      </div>

    </section>
  )
}

export default ProductsList