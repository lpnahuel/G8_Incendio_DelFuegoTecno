import { Link } from "react-router-dom"

const LastProductCard = ({name, price, stock, category, id}) => {
  return (
    <>
      <div className='productCard'>
        <div className='productCard__top'>
          <img src="" alt="" />
        </div>
        <div className="productCard__center">
          <div>
            <h3>Último producto creado</h3>
            <hr />
            <h4>{name}</h4>
          </div>
          <p>Precio: ${price}</p>
          <p>Categoría: {category}</p>
          <p>Stock: {stock}</p>
        </div>
        <div className='productCard__bottom'>
          <Link to={`products/${id}`}>Ver detalles</Link>

        </div>
      </div>
    </>
  )
}

export default LastProductCard