
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main>
      <header>
        <h1>404</h1>
        <p>Halaman tidak ditemukan.</p>
      </header>

      <p>
        Maaf, halaman yang kamu cari tidak tersedia.
      </p>

      <Link to="/">Kembali ke Beranda</Link>
    </main>
  );
}

export default NotFoundPage;
