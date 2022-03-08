import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import useFetch from 'react-fetch-hook';


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

  const loadStores = async () => {
    const res = await axios.get('http://localhost:3001/api/stores');
    setStores(res.data)
    console.log(res.data);
  }
  useEffect(() => {
    loadStores();
  }, []);



  return (
    <div>
      <h1>ListStores</h1>
      {stores.map((store) => {
        return <ul key={store._id}>
          <li>{store.name}</li>
        </ul>
      })}



    </div>
  )
}

export default ListStores