export interface Pruebas {
  name: string,
  age: number
};


export const pruebas: Pruebas = {
  name: 'Beto',
  age: 35  
}


export const func = () => {
  const result =pruebas.age * 2;

  return result;
}



