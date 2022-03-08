import React, { Fragment, useEffect, useState } from 'react'
import { Service } from '../../helpers/interfaces';

const ListServices = () => {
  const [services, setServices] = useState<Service[]>([]);

  const loadServices = async () => {
    await fetch('http://localhost:3001/api/services')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setServices(data)
      });
  };

  useEffect(() => {
    loadServices()
  }, [])
  

  return (
    <Fragment>
      <div>ListServices</div>
      <ul>
        {services.map((service) => {
          return (
            <li key={service._id}>
              {service.name}
              <p>{service.description}</p>
              <p>{service.price}</p>
              </li>
          )
        })}
      </ul>

    </Fragment>
    

  )
}

export default ListServices