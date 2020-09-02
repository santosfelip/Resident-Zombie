import axios from 'axios'
import { BASE_URL } from '../../infra/utilities'


export async function getReportInfected() {
    try{
      const people = await axios.get(`${BASE_URL}/report`);
      return people.data;
    }catch(err) {
        return null;
    }
}
