import styles from './style.module.css'
import { Navigate, Outlet, useLocation } from "react-router"
import { Header } from "../Header"



function Layout() {

    const loc = useLocation();
    if(loc.pathname === '/') {
        return <Navigate to='/1' />
    }

  return (
    <div className={styles.Layout}>
        <Header title={'PostsList'} />
        <main className={styles.LayoutInsides}>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout
