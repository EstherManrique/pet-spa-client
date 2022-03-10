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

interface LoginCredentials extends Store {
  userName: string,
  email: string,
  password: string,
  roles: string[]
}

interface Request {
  user: any;
}
interface Response {
  user: any;
}

export type { Store, Service, LoginCredentials, Request, Response }