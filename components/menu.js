import Link from 'next/link';

function Menu(){
    return (
        <div>
            <link rel="stylesheet" href="/css/b.css" />
            <script src="https://i.fontawesome.com/a076d05399.js"></script>
            <input type="checkbox" id="check" />
            <label for="check">
                <i class="fas fa-bars" id="btn"></i>
                <i class="fas fa-times" id="cancel"></i>
            </label>
            <div class="sidebar">
            <header>Menu :</header>
            <ul>
                <li><a href="/index"><i class ="fas fa-qrcode"></i>Home</a></li>
                <li><a href="/menu/1"><i class ="fas fa-link"></i>Benih Padi</a></li>
                <li><a href="/menu/2"><i class ="fas fa-link"></i>Benih Cabai</a></li>
                <li><a href="/perawatan/1"><i class ="fas fa-link"></i>Perawatan Padi</a></li>
                <li><a href="/perawatan/2"><i class ="fas fa-link"></i>Perawatan Cabai</a></li>
            </ul>
            </div>
        </div>
    );
}

export default Menu;