import Aux from '../../hoc/Auxx'
import '../../css/Layout.css'
const Layout = (props) => {
    return(
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="main">
                {props.children}
            </main>
        </Aux>
    )
    
    
}


export default Layout