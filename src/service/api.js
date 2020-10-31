import axios from 'axios';

//Importar produtos de Api com Axios.
const api = axios.create({ baseURL:'http://rocketseat-node.herokuapp.com/api' });

export default api