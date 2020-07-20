import dummyData from '../../dataset/dummy.json';

const Artikel = (props) => {
    return (
        <div className="container">
            <h1 className="title">{props.nama}</h1>
            <p>{props.harga}</p>
        </div>
    );
}
export async function getStaticProps(context) {
    let kode = context.params.kode;
    let data = dummyData.find(x => x.nama == kode);

    let {nama, harga} = data;

    return {
        props : {
            nama, gambar, harga
        }
    }
}

export async function getStaticPaths() {
    return {
        paths : dummyData.map(data => (
            {params : {kode : `${data.id}`}}
            )),
               
        fallback : false
    }
}
export default Artikel;