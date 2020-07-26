import Header from '../components/header';

const Layout = (props) => (
    <div class="container">
        
        <Header />
        {props.children}
        
    </div>
)
export default Layout;