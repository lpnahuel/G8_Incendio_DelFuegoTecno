import '../../index.css'

const UserDetail = () => {
  return (
    <section className="userDetailContainer">
      <div className="userDetail">
        <div className="userDetail__img">
        <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' alt='user' />
        </div>
        <div className="userDetail__body">
          <h4>User Name</h4>
          <p>User ID</p>
          <p>User Role</p>
          <hr/>
          <div className="userDetail__info">
            <p>User Email</p>
            <p>User Phone</p>
            <p>User Address</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserDetail