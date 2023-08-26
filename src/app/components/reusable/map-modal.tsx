import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const BarberMap = ({ lng, lat }: { lng: number, lat: number }) => {
  return (
    <MapContainer
      center={[lng, lat]}
      zoom={19}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "550px" }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lng, lat]}>
        <Popup>
          Barbershop Artist
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default BarberMap;