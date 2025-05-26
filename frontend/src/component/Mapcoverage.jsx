// components/CoverageMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const cities = [
  { name: "Jakarta Pusat", pos: [-6.1865, 106.8343] },
  { name: "Bandung", pos: [-6.9175, 107.6191] },
  { name: "Bekasi", pos: [-6.2383, 106.9756] },
  // Tambahkan kota lain
];

export default function Mapcoverage() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">AREA COVERAGE</h2>
        <p className="text-center text-gray-600 mb-8">Kini hadir di 15+ kota di Jawa dan Sumatra</p>
        
        <div className="h-96 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <MapContainer 
            center={[-2.5489, 118.0149]} // Posisi tengah Indonesia
            zoom={5} 
            scrollWheelZoom={true}
            className="h-full"
          >
            <TileLayer 
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {cities.map((city, idx) => (
              <Marker key={idx} position={city.pos}>
                <Popup>
                  <strong>TELEPORT.NET</strong> <br/>
                  {city.name}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            CEK KETERSEDIAAN DI ALAMAT ANDA
          </button>
        </div>
      </div>
    </section>
  );
}

