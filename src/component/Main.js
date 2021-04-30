import React, {Component} from 'react';
import Tester from '../images/tester.png';

export default class Main extends Component {
  render() {
    return (
      <main>
        <div className="headBx">
          <h3 className="head-title">Latest News</h3>
          <span>...</span>
        </div>
        
        <div className="box">
          <div className="imgBx">
            <img src={Tester} alt="Tester" />
          </div>
          <div className="txtBx">
            <h4>Kepala Karantina Pertanian Tanjung Balai Kunker ke Pemk...</h4>
            <div className="dateBx">
              <div className="date-left">
                <i class='bx bxs-map-alt'></i>
                <p>Persepsi</p>
              </div>
              <div className="date-right">
                <i class='bx bx-time' ></i>
                <p>2021-04-29 14:12:05</p>
              </div>
            </div>
            <p>Selanjutnya Kepala Karantina Pertanian Balai Asahan, Edwar Syam menyampaikan bahwa tujuan kunjungannya ke Pemkab Asahan untuk mengajak Pemerintah Daerah Kabupaten Asahan bekerjasama atau saling bergandengan tangan dengan Karantina Pertanian Tanjung Balai Asahan membangun Kabupaten Asahan dalam pengembangan dan peningkatan</p>
          </div>
        </div>

        <h3 className="head-title border">Top Stories</h3>
        <ul>
          <li>Presiden Jokowi Tinjau Panen Raya Padi di Kabupaten Malang</li>
          <li>Pernyataan Puan Soal Reshuffle Kabinet Ditepis Pimpinan Ormas</li>
          <li>Direktur IFAD: Kementan dan IFAD Prioritaskan Kesejahteraan Petani</li>
          <li>Presiden Jokowi: Kita tidak perlu Impor Beras</li>
          <li>Kepala Karantina Pertanian Tanjung Balai Kunker ke Pemkab Asahan</li>
          <li>Peternak minta Impor Jagung, ini alasannya</li>
          <li>Presiden RI apresiasi Pemprov NTT paksa panen padi di food estate</li>
          <li>Dukung Replanting Asian Agri Dampingi Petani Sawit</li>
          <li>Tinjau Panen Raya di Kabupaten Malang, Presiden RI Jokowi: Tidak perlu Impor Beras</li>
          <li>Tentang pernikahan sesama jenis hingga anjuran Baca Al-Qur'an, ini 20 pernyataan Putin paling be...</li>
        </ul>

        <h3 className="head-title border">Top Issues</h3>
        <div className="issueBx">
          <p>Bawang Merah</p>
          <p>Gagal Panen</p>
          <p>Jawa Barat</p>
          <p>Jawa Timur</p>
          <p>Kementerian Perdagangan</p>
          <p>Kementerian Pertanian</p>
          <p>Ketahanan Pangan</p>
          <p>Menteri Pertanian</p>
          <p>Pandemi Covid-19</p>
          <p>Sektor Pertanian</p>
        </div>
      </main>
    );
  }
}