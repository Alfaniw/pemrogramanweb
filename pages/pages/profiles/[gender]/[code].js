import Link from 'next/link';
import fetch from 'node-fetch';

const Profiles = (props) => (
    <div className="container">
        <nav className="level">
            <div className="level-item has-text-centered">
                <Link href="/profiles/[gender]/[code]" as="/profiles/male/x"><a>Pria X</a></Link>
            </div>
            <div className="level-item has-text-centered">
                <Link href="/profiles/[gender]/[code]" as="/profiles/male/y"><a>Pria Y</a></Link>
            </div>
            <div className="level-item has-text-centered">
                <Link href="/profiles/[gender]/[code]" as="/profiles/male/z"><a>Pria Z</a></Link>
            </div>
            <div className="level-item has-text-centered">
                <Link href="/profiles/[gender]/[code]" as="/profiles/female/x"><a>Wanita X</a></Link>
            </div>
            <div className="level-item has-text-centered">
                <Link href="/profiles/[gender]/[code]" as="/profiles/female/y"><a>Wanita Y</a></Link>
            </div>
            <div className="level-item has-text-centered">
                <Link href="/profiles/[gender]/[code]" as="/profiles/female/z"><a>Wanita Z</a></Link>
            </div>
            </nav>

            <p className="title">Data Diri {props.jenisKelamin} {props.code.toUpperCase()}</p>
            <div className="box">
                <div className="media">
                    <figure className="media-left">
                        <p className="image is-64x64">
                            <img src={props.foto} />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{props.nama}</strong> <small>{props.email}</small>
                                <br />
                                {props.alamat}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)

export async function getStaticPaths() {
    return {
        paths: [
            {params: {gender: "male", code: "x"}},
            {params: {gender: "male", code: "y"}},
            {params: {gender: "male", code: "z"}},
            {params: {gender: "female", code: "x"}},
            {params: {gender: "female", code: "y"}},
            {params: {gender: "female", code: "z"}},
            ],
        fallback: false
    }
}

export async function getStaticProps(context){
    let { gender, code } = context.params;
    let source = `https://randomuser.me/api/?gender=${gender}`;
    let response = await fetch(source);
    let data = await response.json();
    let result = data.results[0];

    let nama = `${result.name.first} ${result.name.last}`;
    let email = result.email;
    let foto = result.picture.large;
    let alamat = `Jalan ${result.location.street.name} No. ${result.location.street.number}, Kota ${result.location.city}, ${result.location.state}, ${result.location.country}`;

    let jenisKelamin = (gender == "male") ? "Pria" : "Wanita";

    return {
        props: {
        code, nama, email, foto, alamat, jenisKelamin
        }
    }
}

export default Profiles;



