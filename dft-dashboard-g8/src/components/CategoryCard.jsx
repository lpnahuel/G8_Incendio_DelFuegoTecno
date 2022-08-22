import '../index.css';

const CategoryCard = ({category}) => {
  return (
    <div className='categoryCard'>
    <div className='categoryCard__body'>
      <h4>{category.name}</h4>
      <p>Cantidad de productos: {category.products.length}</p>
    </div>
  </div>
  )
}

export default CategoryCard