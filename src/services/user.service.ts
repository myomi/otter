import axios, { AxiosPromise } from 'axios';
import config from '../config/config';

const Userservice = {
  getUser(id: number): AxiosPromise<User> {
    return axios.get<User>(`${config.BASE_URL}/${id}`);
  }
};

interface User {
  id: number;
  name: string;
}

export default Userservice;
