import Menu from '../components/menu';
import Layout from '../layouts/layout';
import data from '../dataset/data.json'

function Beranda(){
    return (
        <Layout>
            <Menu />
            <section class="isi">
                
            <br/>
            <h3>Selamat Datang di Website kami dan Selamat Belanja</h3>
            <hr/>
            <p>Aplikasi ini memudahkan petani untuk mencari bibit tanaman dan memudahkan petani untuk mengetahui bagaimana merawat tanaman tersebut.</p>
            <br/>
            <br/>
            <h3>Contoh Produk Kami</h3>
            <br/>
            {data.map((data,index) =>
                <div class="box" key={index}>
                    <h4>{data.judul}</h4>
                    <img src={data.img} width="200px" height="200px"/>
                </div>
            )}
            </section>
            <section>

            </section>
        </Layout>
    );
}

export default Beranda;