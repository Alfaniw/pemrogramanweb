import Link from 'next/link';

function Menu(){
    return (
            <ul>
                <li><a href="/index">Home</a></li>
                <li><a href="/Padi">Bibit Padi</a></li>
                <li><a href="/Cabai">Bibit Cabai</a></li>
                <li><a href="/Perawatan">Perawatan</a></li>
                <ul>
                    <li><a href="/Perawatan/padi">Padi</a></li>
                    <li><a href="/Perawatan/Cabai">Cabai</a></li>
                </ul>
            </ul>
    );
}
export default Menu;