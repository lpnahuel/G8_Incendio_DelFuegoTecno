import UserCard from '../../components/UserCard';
import '../../index.css';
import { useAllUsers } from '../../hooks/useAllUsers';


const UsersList = () => {
  const { dataUsers, isLoadingUsers } = useAllUsers(`https://g8incendio-dft.herokuapp.com/api/users/list`);
  const {user} = !!dataUsers && dataUsers;

  return (
    <section className='userList'>
      <h3>Lista de usuarios registrados</h3>
      <hr />
      <div className='usersListContainer'>
      {
          isLoadingUsers ?
          (
            <section>
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
        </section>

            ):(
              user.map(allUsers =>{
                return (
                  <UserCard users = {allUsers} key={allUsers.id}/>

                )
              })

            )
        }

      </div>
    </section>
  )
}

export default UsersList