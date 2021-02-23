import Aux from '../../hoc/Auxx'
import '../../css/Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const Layout = (props) => {
    return(
        <Aux>
            {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
            <Toolbar />
            <main className="main">
                {props.children}
            </main>
        </Aux>
    )
    
    
}


export default Layout