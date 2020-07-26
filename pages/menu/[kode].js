import dummt from '../../dataset/data.json';
import Layout from '../../layouts/layout';
import Navbar from '../../components/menu';

const Artikel = (props) => {
    return (
        <Layout>
            <Navbar/>
            <div class="isi">
                <br/>
                <h1>BENIH {props.judul}</h1>
                <br/>
                <img src={props.img} width="320px" height="320px"/>
                <h4>Harga</h4> <br/>
                <h4>{props.harga}</h4>
                <br/>
                <br/>
                <button class="beli"><a href="#">Beli</a></button>
            </div>
        </Layout>
    )
}

export default Artikel;

export async function getServerSideProps(context){
    let kode = context.params.kode;
    let data = dummt.find(x => x.id == kode);
    // ambil judul & isi dari data hasil pencarian
    let { img, judul, harga } = data;
    return {
        props : {
        // kirim judul & isi sebagai properti ke komponen utama
            img, judul, harga
        }
    }
}