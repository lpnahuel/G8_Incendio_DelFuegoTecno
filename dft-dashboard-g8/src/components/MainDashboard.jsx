import '../index.css';
import AppRouter from '../routes/AppRouter'
import NavBar from './NavBar'
import SideBar from './SideBar'

const MainDashboard = () => {
  return (
    <main>
      <NavBar/>
      <div className='mainHome'>
        <SideBar/>
        <div className='homeContainer'>
        <AppRouter/>
        </div>
      </div>
    </main>
  )
}

export default MainDashboard