import axios from "axios";

const API = "http://localhost:5000/api/users";

export const getProfile = async (token) => {

    return axios.get(

        `${API}/profile`,

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );

};

export const updateProfile = async(data,token)=>{

    return axios.put(

        `${API}/profile`,

        data,

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );

};

export const changePassword = async(data,token)=>{

    return axios.put(

        `${API}/change-password`,

        data,

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );

};