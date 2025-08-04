```javascript
export function createApp() {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warung Bakso Malang - Cita Rasa Khas Malang di Lidah Anda</title>
  <meta name="description" content="Rasakan kelezatan bakso urat, bakso tahu, dan mie ayam dengan kuah gurih dan daging empuk khas Malang di Warung Bakso Malang.  Pesan sekarang!">
  <style>
    body { font-family: sans-serif; }
    .container { max-width: 960px; margin: 0 auto; padding: 20px; }
    .hero { background-color: #f2f2f2; padding: 50px 0; text-align: center; }
    .hero h1 { font-size: 3em; }
    .section { margin-bottom: 40px; }
    .menu-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .testimonials { display: flex; flex-wrap: wrap; justify-content: space-around; }
    .testimonial { width: 300px; margin-bottom: 20px; padding: 15px; border: 1px solid #ccc; }
  </style>
</head>
<body>

    <!-- Disclaimer Popup Modal -->
    <div id="disclaimer-popup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" style="display: block;">
      <div class="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
        <div class="text-center">
          <div class="mb-4">
            <svg class="mx-auto h-12 w-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          
          <h3 class="text-lg font-semibold text-gray-900 mb-3">⚠️ Peringatan Penting</h3>
          
          <div class="text-sm text-gray-600 mb-4 text-left">
            <p class="mb-2">• Website ini adalah <strong>hasil kreasi NYAI-Autokeren</strong></p>
            <p class="mb-2">• Menggunakan domain <strong>keren.co.id</strong></p>
            <p class="mb-2">• Kami <strong>tidak bertanggung jawab</strong> atas informasi bisnis yang ditampilkan</p>
            <p class="mb-2">• Harap lakukan <strong>verifikasi sendiri</strong> sebelum bertransaksi</p>
          </div>
          
          <div class="mb-4 p-3 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              <strong>Ingin menghilangkan peringatan ini?</strong><br>
              Upgrade ke paket premium untuk website tanpa disclaimer
            </p>
          </div>
          
          <div class="flex flex-col space-y-2">
            <button 
              id="continue-btn"
              onclick="closeDisclaimer()" 
              class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              ✅ Lanjutkan ke Website
            </button>
            
            <a 
              href="https://autokeren.com" 
              target="_blank"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200 no-underline block"
            >
              🌐 Hubungi NYAI - Upgrade Premium
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Blur Overlay -->
    <style>
      #main-content {
        filter: blur(3px);
        pointer-events: none;
        transition: filter 0.3s ease;
      }
      
      .disclaimer-hidden {
        filter: none !important;
        pointer-events: auto !important;
      }
      
      #continue-btn {
        cursor: pointer !important;
      }
      
      #continue-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
    </style>

    <!-- Fixed JavaScript Function -->
    <script>
      function closeDisclaimer() {
        console.log('Closing disclaimer popup...');
        
        try {
          // Hide popup with animation
          const popup = document.getElementById('disclaimer-popup');
          if (popup) {
            popup.style.opacity = '0';
            popup.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
              popup.style.display = 'none';
            }, 300);
          }
          
          // Remove blur from main content
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.classList.add('disclaimer-hidden');
            mainContent.style.filter = 'none';
            mainContent.style.pointerEvents = 'auto';
          }
          
          console.log('Disclaimer popup closed successfully');
          
          // Optional: Store in localStorage to remember user choice
          localStorage.setItem('disclaimerAccepted', 'true');
          
        } catch (error) {
          console.error('Error closing disclaimer:', error);
          // Fallback: force hide
          document.getElementById('disclaimer-popup').style.display = 'none';
          document.getElementById('main-content').style.filter = 'none';
        }
      }
      
      // Ensure popup shows on page load (unless previously accepted)
      document.addEventListener('DOMContentLoaded', function() {
        const popup = document.getElementById('disclaimer-popup');
        const accepted = localStorage.getItem('disclaimerAccepted');
        
        if (popup && !accepted) {
          popup.style.display = 'flex';
          popup.style.opacity = '1';
        } else if (accepted) {
          // Auto-close if previously accepted
          closeDisclaimer();
        }
      });
      
      // Alternative close methods
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeDisclaimer();
        }
      });
      
      // Click outside to close (optional)
      document.addEventListener('click', function(e) {
        const popup = document.getElementById('disclaimer-popup');
        if (e.target === popup) {
          closeDisclaimer();
        }
      });
    </script>
  
<div id="main-content">
  <div class="container">
    <section class="hero">
      <h1>Warung Bakso Malang</h1>
      <p>Cita Rasa Khas Malang yang Menggoyang Lidah</p>
      <button style="background-color:#4CAF50; border:none; color:white; padding:15px 32px; text-align:center; text-decoration:none; display:inline-block; font-size:16px; border-radius: 5px;">Pesan Sekarang</button>
    </section>

    <section class="section about">
      <h2>Tentang Kami</h2>
      <p>Warung Bakso Malang hadir dengan misi untuk menghadirkan cita rasa bakso asli Malang yang autentik dan lezat bagi Anda.  Kami menggunakan resep turun-temurun keluarga dengan bahan-bahan pilihan berkualitas tinggi untuk menghasilkan bakso urat, bakso tahu, dan mie ayam yang empuk, gurih, dan tak terlupakan.  Keahlian kami dalam meracik kuah kaldu yang kaya rasa menjadi rahasia kelezatan setiap hidangan kami.  Kunjungi kami dan rasakan sendiri sensasi kuliner khas Malang yang istimewa!</p>
      <p>Kami berkomitmen untuk memberikan pelayanan terbaik dan memastikan kepuasan pelanggan.  Setiap mangkuk bakso yang kami sajikan dibuat dengan penuh kasih sayang dan dedikasi.</p>
    </section>

    <section class="section menu">
      <h2>Menu</h2>
      <div class="menu-items">
        <div class="menu-item">Bakso Urat Special</div><div>Rp 25.000</div>
        <div class="menu-item">Bakso Urat Biasa</div><div>Rp 20.000</div>
        <div class="menu-item">Bakso Tahu Special</div><div>Rp 22.000</div>
        <div class="menu-item">Bakso Tahu Biasa</div><div>Rp 18.000</div>
        <div class="menu-item">Mie Ayam Special</div><div>Rp 19.000</div>
        <div class="menu-item">Mie Ayam Biasa</div><div>Rp 15.000</div>
        <div class="menu-item">Bakso Urat Jumbo</div><div>Rp 30.000</div>
        <div class="menu-item">Bakso Komplit (Urat, Tahu, Kuah)</div><div>Rp 28.000</div>
        <div class="menu-item">Bakso Ceker</div><div>Rp 23.000</div>
        <div class="menu-item">Bakso Telur Puyuh</div><div>Rp 21.000</div>
        <div class="menu-item">Mie Ayam Bakso</div><div>Rp 24.000</div>
        <div class="menu-item">Es Teh Manis</div><div>Rp 5.000</div>
        <div class="menu-item">Es Jeruk</div><div>Rp 7.000</div>
        <div class="menu-item">Teh Hangat</div><div>Rp 4.000</div>
        <div class="menu-item">Kopi Susu</div><div>Rp 8.000</div>
        <div class="menu-item">Paket Hemat A (Bakso Urat + Teh)</div><div>Rp 28.000</div>
        <div class="menu-item">Paket Hemat B (Mie Ayam + Es Jeruk)</div><div>Rp 22.000</div>
      </div>
    </section>


    <section class="section testimonials">
      <h2>Testimoni Pelanggan</h2>
      <div class="testimonial">
        <p>"Baksonya enak banget! Kuahnya gurih dan dagingnya empuk.  Porsinya juga pas.  Bakal balik lagi!"</p>
        <p>- Ani Lestari</p>
      </div>
      <div class="testimonial">
        <p>"Saya suka banget sama mie ayamnya.  Rasanya beda dari yang lain, lebih gurih dan berasa bumbunya."</p>
        <p>- Budi Santoso</p>
      </div>
      <div class="testimonial">
        <p>"Tempatnya bersih dan nyaman. Pelayanannya juga ramah.  Bakso urat specialnya recommended banget!"</p>
        <p>- Cici Wijayanti</p>
      </div>
      <div class="testimonial">
        <p>"Harga terjangkau, rasa bintang lima!  Bakso Malang terbaik di kota ini."</p>
        <p>- Dedi Permana</p>
      </div>
      <div class="testimonial">
        <p>"Selalu puas makan di Warung Bakso Malang.  Kuah kaldu nya bikin nagih."</p>
        <p>- Eka Setyaningsih</p>
      </div>
      <div class="testimonial">
        <p>"Saya pelanggan setia Warung Bakso Malang. Bakso dan mie ayamnya selalu konsisten enaknya."</p>
        <p>- Fajar Maulana</p>
      </div>
    </section>

    <section class="section contact">
      <h2>Kontak Kami</h2>
      <p>Alamat: Jl. Raya Malang No. 123, Malang, Jawa Timur</p>
      <p>Jam Buka: 09.00 - 21.00 WIB</p>
      <p>Telepon: 081234567890</p>
      <p>Email: warungbaksomalang@email.com</p>
      <p>Ikuti kami di media sosial:</p>
      <p><a href="#">Instagram</a> | <a href="#">Facebook</a></p>
    </section>
  </div>
</div>
</body>
</html>`;
}
```
