import React from 'react'
import CategoryCard from '../../components/CategoryCard'

const CategoryList = () => {
  return (
    <section className='categoryMain'>
      <h3>Listado de categorías</h3>
      <hr />
      <div className='categoryContainer'>

      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
        
      </div>
    </section>
  )
}

export default CategoryList