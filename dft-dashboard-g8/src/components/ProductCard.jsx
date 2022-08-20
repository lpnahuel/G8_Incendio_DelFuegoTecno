import '../index.css';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (

    <div className='productCard'>
    <div className='productCard__top'>
        <img src="" alt="" />
    </div>
    <div className="productCard__center">
        <div>
            <h4>Product Name</h4>
            <hr />
        </div>
        <p>Product Price</p>
        <p>Product Category</p>
        <p>Stock</p>
    </div>
    <div className='productCard__bottom'>
        <Link to='...'>Ver detalles</Link>
    
    </div>

</div>
  )
}

export default ProductCard