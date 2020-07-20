import Header from `./../component/header`;

const Layout =(props) => (
    <div>
        <Header />
            {props.children}
    </div>
)
export default Layout;