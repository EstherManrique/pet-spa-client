import React, { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';

// import useFetchMy from '../../helpers/useFetchMy';


// interface Store {  
// _id: string,
// name: string,
// address: string,
// email: string,
// phone: number,
// location: string,
// }

// type StoreApiResponse = {  
// _id: string,
// name: string,
// address: string,
// email: string,
// phone: number,
// location: string,
// }


const ListStores = () => {

/*   const [stores, setStores] = useState([])

  const loadStores = async () => {

    console.log('Works!');
    const res = await fetch('http://localhost:3001/api/stores', {
      mode: 'no-cors',
      'headers': {
        'Access-Control-Allow-Origin': '*',
      }
    })
    console.log(res);
  }
  useEffect(() => {
    loadStores()
  }, []); */

  const options = {
    mode: 'no-cors',
    'headers': {
      'Access-Control-Allow-Origin': '*',
    }
  }
  const loadStores = useFetch('http://localhost:3001/api/stores', options);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error! {error.status}</div>;

  console.log(loadStores);
  

  return (
    <div>
      <h1>ListStores</h1>


    </div>
  )
}

export default ListStores