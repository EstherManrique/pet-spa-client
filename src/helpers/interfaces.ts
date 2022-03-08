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

interface Service extends Store {
  description: string,
  price: number
}

export type { Store, Service }