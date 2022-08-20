import UserCard from '../../components/UserCard';
import '../../index.css';

const UsersList = () => {
  return (
    <section className='userList'>
      <h3>Users List</h3>
      <hr />
      <div className='usersListContainer'>

        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>

      </div>
    </section>
  )
}

export default UsersList