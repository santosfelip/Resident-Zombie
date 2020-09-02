import axios from 'axios';
import { BASE_URL } from '../../infra/utilities';

//GET All People
export async function getPeople() {
    try{
      const request = await axios.get(`${BASE_URL}/people`);
      return request;
    } catch(err) {
      console.error(err);
      return null;
    }
}



//ADD Pople
export async function postPeople(data) {
    try{
        await axios.post(`${BASE_URL}/register`, data );
        return 'Sucesss';
    }catch(err) {
        return 'Error';
    }
}


export async function getPeopleById(SurrogateKey) {
  try{
    const request = await getPeople();

    const People = request.data.find(element => element.SurrogateKey === SurrogateKey);

    return People;
  }catch(err) {
    console.error(err);
  }
}

//Update location of People
export async function postUpdateLocation(data) {
  try{
      await axios.post(`${BASE_URL}/updateLocation`, data );
      return 'Sucesss';
  }catch(err) {
      return 'Error';
  }
}

//Update Infected for true
export async function postUpdateInfected(data) {
  try{
      await axios.post(`${BASE_URL}/updateInfected`, data );
      return 'Sucesss';
  }catch(err) {
      return 'Error';
  }
}
