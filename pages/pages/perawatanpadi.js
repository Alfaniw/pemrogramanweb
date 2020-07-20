import Menu from '../component/menu';
import Layout from '../layouts/layout';

const perawatanPadi = () => (
    <Layout>
        <Menu />
        <link rel="stylesheet" href="/css/perawatanpadi.css" />
        <section>
            <h3>Cara Perawatan Padi</h3>
            <article>
                <h5>1. Lakukan penyiangan daloan 2 minggu sekali</h5>
                <h5>2. Lakukan pengairan yang wajar supaya tidak kelebihan dan kekurangan</h5>
                <h5>3. Lakukan pemupukan setelah 7-15 hari</h5>
            </article>
        </section>
    </Layout>
)
export default perawatanPadi;