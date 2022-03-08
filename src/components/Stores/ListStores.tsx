import React, { useEffect, useState, AriaAttributes, DOMAttributes } from 'react';
import GoogleMapReact from 'google-map-react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    lat?: number,
    lng?: number
  }
}

interface Store {
  _id: string,
  name: string,
  address: string,
  email: string,
  phone: number,
  location: string,
  createdAt: string,
  updatedAt: string
}

const ListStores = () => {

  const [stores, setStores] = useState<Store[]>([]);

  const [center, setCenter] = useState({
    lat: 19.432478999999994,
    lng: -99.13306100000001
  });

  const loadStores = async () => {
    await fetch('http://localhost:3001/api/stores')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStores(data)
      })
  }

  useEffect(() => {
    loadStores();
  }, []);

  const [activeItem, setActiveItem] = useState('')
  const handleOnClick = (key:string, place:string) => {
    if(key === activeItem) { // click on the same active pin
      setActiveItem('');
    } else {
      setActiveItem(key);
    }
    let location = place.split(' ');
    setCenter({
      lat: parseFloat(location[0]),
      lng: parseFloat(location[1])
    });
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDT0y7nhH7yP4GzV0c-v0Ldtqi7cr6Txb8',
          language: 'en',
          region: 'US',
        }}
        defaultCenter={center}
        center={center}
        defaultZoom={12}
      >
        {stores.map((store) => {
          const location = store.location.split(' ');
          return (
            <div
              key={store._id}
              style={{ width: '30px', height: '50px', background: 'url("/assets/images/map_pin.png") no-repeat center center', backgroundSize: 'contain'}}
              lat={parseFloat(location[0])}
              lng={parseFloat(location[1])}
              onClick={() => {
                handleOnClick(store._id, store.location)
              }}
            >
            </div>
          )
        })}
      </GoogleMapReact>
    </div>
  )
}

export default ListStores