
//BASE_URL do Backend
export const BASE_URL  = 'http://localhost:3003/api';

//Add one more in the longitude to create the false location
//This is exported for the Componente 'RegisterForm'
export const getLocationFalse = (longitude) =>  {
  return longitude > 0 ? longitude + 1 : longitude - 1;
}
