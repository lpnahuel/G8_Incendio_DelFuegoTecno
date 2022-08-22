import '../index.css';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    return (
        <>
            <div className='productCard'>
                <div className='productCard__top'>
                    <img src={product.image_01} alt={product.name} />
                </div>
                <div className="productCard__center">
                    <div>
                        <h4>{product.name}</h4>
                        <hr />
                    </div>
                    <p>Precio: ${product.price}</p>
                    <p>Categoría {product.categories.name}</p>
                    <p>Stock: {product.stock}</p>
                </div>
                <div className='productCard__bottom'>
                    <Link to={`/products/${product.id}`}>Ver detalles</Link>

                </div>
            </div>
        </>
    )
}

export default ProductCard