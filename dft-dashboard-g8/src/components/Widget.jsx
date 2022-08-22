import '../index.css';
import { Link } from "react-router-dom"

const Widget = ({title, quantity, isLoading}) => {
  return (
    <>
    <Link to='/products'>

      <div className='infoWidget'>
        <div className='infoWidget__item'>
          <h4 className='item__title'>{title}</h4>
          <hr />
          <p className='item__text'>Total: {quantity}</p>
        </div>
      </div>
    </Link>
    </>
  )
}

export default Widget