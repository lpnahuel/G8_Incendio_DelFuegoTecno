import '../index.css';
import { Link } from 'react-router-dom';

const UserCard = () => {
  return (
    <div className='userCard'>
    <div className='userCard__image'>
      <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' alt='user' />
    </div>
    <div className='userCard__top'>
      <h4 className='userCard__info--title'>User Name</h4>
      <hr />
      <p className='info__text'>ID</p>
      <p className='info__text'>Role</p>
    </div>
    <div className='productCard__bottom'>
      <Link to='...'>Ver detalles</Link>
    </div>
  </div>
  )
}

export default UserCard