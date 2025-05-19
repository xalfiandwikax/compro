// src/components/Footer.jsx
export default function Footer({ companyName, address, phone, email }) {
    return (
      <footer className="bg-blue-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{companyName}</h3>
              <p className="text-blue-200">{address}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">Home Internet</a></li>
                <li><a href="#" className="hover:text-white">Bisnis</a></li>
                <li><a href="#" className="hover:text-white">Dedicated Server</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Bantuan</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">Status Jaringan</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Tutorial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Telp: {phone}</li>
                <li>Email: {email}</li>
                <li>WhatsApp: +62 812 3456 7890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300">
            <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }