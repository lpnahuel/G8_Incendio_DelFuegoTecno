import React from 'react'
import CategoryCard from '../../components/CategoryCard'
import { useAllProducts } from '../../hooks/useAllProducts';

const CategoryList = () => {
  const { dataProducts, isLoadingProducts } = useAllProducts(`https://g8incendio-dft.herokuapp.com/api/products`);
  const { categories } = !!dataProducts && dataProducts;

  return (
    <section className='categoryMain'>
      <h3>Listado de categorías</h3>
      <hr />
      <div className='categoryContainer'>

      {
          isLoadingProducts ?
          (
            <section>
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
        </section>

            ):(
              
              categories.map(category => {
                return (
                    <CategoryCard category={category} key={category.id} />
                    )
                })
            )
        }
        
      </div>
    </section>
  )
}

export default CategoryList