import dummt from '../../dataset/data.json';
import Layout from '../../layouts/layout';
import Navbar from '../../components/menu';

const Artikel = (props) => {
    return (
        <Layout>
            <Navbar/>
            <div class="isi">
                <br/>
                <h1>PERAWATAN {props.judul}</h1>
                <br/>
                <img src={props.img} width="200px" height="200"/>
                <h4>Cara: </h4> <br/>
                <h4>{props.cara[0].langkah}</h4><br/>
                <h4>{props.cara[1].langkah}</h4><br/>
                <h4>{props.cara[2].langkah}</h4>
                <br/>
            </div>
        </Layout>
    )
}

export default Artikel;

export async function getServerSideProps(context){
    let kode = context.params.kode;
    let data = dummt.find(x => x.id == kode);
    // ambil judul & isi dari data hasil pencarian
    let { img, judul, harga, cara } = data;
    return {
        props : {
        // kirim judul & isi sebagai properti ke komponen utama
            img, judul, harga, cara
        }
    }
}