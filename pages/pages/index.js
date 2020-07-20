import Menu from '../component/menu';
import Layout from '../layouts/layout';

function Beranda(){
    return (
        <Layout>
            <Menu />
            <link rel="stylesheet" href="/css/index.css" />
            <main>
                <p>Aplikasi ini memudahkan petani untuk mencari bibit tanaman dan memudahkan petani untuk mengetahui bagaimana merawat tanaman tersebut</p>    
            </main> 
            </Layout>
    );
}
export default Beranda;