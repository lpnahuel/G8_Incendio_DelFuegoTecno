import '../index.css';
import { Link } from 'react-router-dom';

const LastUserCard = ({id, first_name, last_name, role, image}) => {
  return (
    <div className='userCard'>
    <div className='userCard__image'>
      <img src={`${image}`} alt='user' />
    </div>
    <div className='userCard__top'>
      <h3 className='userCard__info--title'>Último usuario registrado</h3>
      <hr />
      <h4 className='info__text'>{first_name + ' ' + last_name}</h4>
      <p className='info__text'>ID: {id}</p>
      <p className='info__text'>Role: {role}</p>
    </div>
    <div className='productCard__bottom'>
      <Link to={`users/${id}`}>Ver detalles</Link>
    </div>
  </div>
  )
}

export default LastUserCard