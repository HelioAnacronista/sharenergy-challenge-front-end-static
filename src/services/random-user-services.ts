import axios from 'axios'


import { usersDTO } from '../models/radomUser'


export const getRandomUsers = async (page: number, limit: number): Promise<usersDTO[]> => {

  
    const { data } = await axios.get(`https://randomuser.me/api/?page=${page}&results=${limit}&seed=abc&inc=name,login,email,dob,picture&noinfo`)

    return data.results
  
}