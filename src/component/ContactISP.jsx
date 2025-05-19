// src/components/ContactISP.jsx
export default function ContactISP() {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
                <p className="mb-6">Tim support kami siap membantu 24/7</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+62 21 1234 5678</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>cs@teleport.net</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white text-gray-800 p-8 md:p-12">
                <h3 className="text-xl font-bold mb-4">Request Pemasangan</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Nama Lengkap" className="w-full p-3 border border-gray-300 rounded" />
                  <input type="text" placeholder="Alamat Lengkap" className="w-full p-3 border border-gray-300 rounded" />
                  <input type="tel" placeholder="Nomor HP" className="w-full p-3 border border-gray-300 rounded" />
                  <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">
                    KIRIM PERMINTAAN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }