// src/components/PricingTable.jsx
const packages = [
    { 
      name: "HOME 30", 
      speed: "30 Mbps", 
      price: "Rp 250.000", 
      quota: "Unlimited",
      fup: "500 GB",
      best: false
    },
    { 
      name: "PRO 100", 
      speed: "100 Mbps", 
      price: "Rp 450.000", 
      quota: "Unlimited",
      fup: "1 TB",
      best: true
    },
    { 
      name: "BUSINESS 500", 
      speed: "500 Mbps", 
      price: "Rp 1.500.000", 
      quota: "Unlimited",
      fup: "5 TB",
      best: false
    },
  ];
  
  export default function PricingTable() {
    return (
      <section id="harga" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">DAFTAR HARGA</h2>
          <p className="text-center text-gray-600 mb-8">Promo gratis pemasangan untuk pendaftaran bulan ini</p>
  
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="p-4 text-left rounded-tl-lg">Paket</th>
                  <th className="p-4 text-center">Kecepatan</th>
                  <th className="p-4 text-center">Harga</th>
                  <th className="p-4 text-center">Kuota</th>
                  <th className="p-4 text-center rounded-tr-lg">FUP*</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr 
                    key={idx} 
                    className={`border-b ${pkg.best ? "bg-yellow-50 font-semibold" : "bg-white"}`}
                  >
                    <td className="p-4">
                      {pkg.name}
                      {pkg.best && (
                        <span className="ml-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">BEST SELLER</span>
                      )}
                    </td>
                    <td className="p-4 text-center">{pkg.speed}</td>
                    <td className="p-4 text-center font-bold text-blue-800">{pkg.price}</td>
                    <td className="p-4 text-center">{pkg.quota}</td>
                    <td className="p-4 text-center">{pkg.fup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <p className="mt-4 text-sm text-gray-500 text-center">
            *FUP: Fair Usage Policy, kecepatan mungkin diturunkan setelah kuota terpakai
          </p>
        </div>
      </section>
    );
  }