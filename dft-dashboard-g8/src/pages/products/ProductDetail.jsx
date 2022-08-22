import { useAllProducts } from '../../hooks/useAllProducts';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const productId = useParams();
  const { dataProducts, isLoadingProducts } = useAllProducts(`https://g8incendio-dft.herokuapp.com/api/products`);
  const { products } = !!dataProducts && dataProducts;
  const [product, setProduct] = useState([])

  // console.log(productId)
  // console.log(dataProducts)
  // console.log(products)

  // const oneProduct = products.find(product => product.id === productId)

  // console.log(oneProduct)
  return (
    <section className="productDetailContainer">
      <div className="detailCard">
        <div className="detailCard__img">
          <img src="" alt="" />
        </div>
        <div className="detailCard__body">
          <h4>Nombre del producto</h4>
          <p>Product ID</p>
          <p>Product Stock</p>
          <hr />
          <div className="detailCard__description">
            <p>Product Price</p>
            <p>Product Description</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail