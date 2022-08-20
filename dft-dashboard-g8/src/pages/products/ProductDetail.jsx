
const ProductDetail = () => {
  return (
    <section className="productDetailContainer">
      <div className="detailCard">
        <div className="detailCard__img">
          <img src="" alt="" />
        </div>
        <div className="detailCard__body">
          <h4>Product Name</h4>
          <p>Product ID</p>
          <p>Product Stock</p>
          <hr/>
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