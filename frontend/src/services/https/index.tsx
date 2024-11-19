import {UsersInterface} from "../../interfaces/IUser";
import {SignInInterface} from "../../interfaces/SignIn";
import {CartitemInterface, OrderInterface, OrderitemInterface, OrderstatusInterface, PaymentInterface, ProductInterface, ShippingInterface, ShippingstatusInterface} from "../../interfaces/IOrder"
import { message } from "antd";


import axios from 'axios';
const apiUrl = "http://localhost:8000";
const Authorization = localStorage.getItem("token");

const Bearer = localStorage.getItem("token_type");


const requestOptions = {

  headers: {

    "Content-Type": "application/json",

    Authorization: `${Bearer} ${Authorization}`,

  },

};
//==================================ไม่ใด้ใช้งาน======================================⏬
async function GetUsers() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    let res = await fetch(`${apiUrl}/users`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }
//==================================ไม่ใด้ใช้งาน======================================⏫
// const onFinish = async (values: SignInInterface) => {
//   console.log('Form Data:', values); // log the data being sent
//   let res = await SignIn(values);

//   if (res.status === 200) {
//     console.log('Login successful:', res.data);
//   } else {
//     console.error('Login failed:', res.data.error);
//     message.error(res.data.error || 'Login failed');
//   }
// };




//==================================Login======================================⏬
  async function SignIn(data: SignInInterface) {

    return await axios
  
      .post(`${apiUrl}/signin`, data, requestOptions)
  
      .then((res) => res)
  
      .catch((e) => e.response);
  
  }
  //signus
  async function CreateUser(data: UsersInterface) {

    return await axios
  
      .post(`${apiUrl}/signup`, data, requestOptions)
  
      .then((res) => res)
  
      .catch((e) => e.response);
  
  }
  // ResetPassword
  async function ResetPassword( data: UsersInterface) {

    return await axios
  
      .put(`${apiUrl}/ResetPasswordUser`, data, requestOptions)
  
      .then((res) => res)
  
      .catch((e) => e.response);
  
  }
  
  //==================================Login======================================⏫

  



  //=====================================================User===================================================
  // get User by id
  async function GetUserById(id: string) {

    return await axios
  
      .get(`${apiUrl}/users/${id}`, requestOptions)
  
      .then((res) => res)
  
      .catch((e) => e.response);
  
  }
  async function DeleteUserByID(id: Number | undefined) {
    const requestOptions = {
      method: "DELETE"
    };
  
    let res = await fetch(`${apiUrl}/users/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      });
  
    return res;
  }
  // update user
  async function UpdateUserByid(id: string, data: UsersInterface) {

    return await axios
  
      .put(`${apiUrl}/users/${id}`, data, requestOptions)
  
      .then((res) => res)
  
      .catch((e) => e.response);
  
  }

  //ไม่ได้ใช้
  async function UpdateUser(data: UsersInterface) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    
    let res = await fetch(`${apiUrl}/users`, requestOptions)
    .then((res) => {
    if (res.status == 200) {
      return res.json();
    } else {
      return false;
    }
  });

  return res;
}

export {
    GetUsers,
    DeleteUserByID,
    UpdateUser,
    UpdateUserByid,
  
    SignIn, //sign in 
    CreateUser, //sign Up
    GetUserById, // get User by id
    ResetPassword,
    // onFinish,
}