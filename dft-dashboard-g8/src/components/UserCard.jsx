import '../index.css';
import { Link } from 'react-router-dom';

const UserCard = ({users}) => {
  return (
    <div className='userCard'>
    <div className='userCard__image'>
      <img src={users.image} alt={users.first_name} />
    </div>
    <div className='userCard__top'>
      <h4 className='userCard__info--title'>{users.first_name + ' ' + users.last_name}</h4>
      <hr />
      <p className='info__text'>ID: {users.id}</p>
      <p className='info__text'>Role: {users.roles.name}</p>
    </div>
    <div className='productCard__bottom'>
      <Link to='...'>Ver detalles</Link>
    </div>
  </div>
  )
}

export default UserCard