import axios from 'axios';
import { BASE_URL } from './utilities';

//Buscar todos os clientes no banco de dados
export async function getClientes() {
    try{
      const request = await axios.get(`${BASE_URL}/clientes`);
      return request;
    } catch(err) {
      console.error(err);
      return null;
    }
}



//Adicionar cliente na base de dados
export async function postCliente(data) {
    try{
        await axios.post(`${BASE_URL}/registro`, data );
        return 'Sucesss';
    }catch(err) {
        return 'Error';
    }
}

//Deletar cliente
export async function deleteCliente(id) {
  try{
    await axios.delete(`${BASE_URL}/${id}`)
    return 'Sucess'
  }catch(err){
    return 'Error'
  }
}

//Alterar cliente
export async function putCliente(id, data) {
  try{
    await axios.put(`${BASE_URL}/${id}`, data)
    return 'Sucess'
  }catch(err){
    return 'Error'
  }
}
