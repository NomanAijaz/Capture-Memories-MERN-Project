import React from "react"; 
import avatar from '../../images/avatar2.png'
import {Formik, Form} from 'formik';
import { TextField } from "../Widgets/TextField";
import * as Yup from 'yup';
import { useState } from 'react';
import {json, useNavigate} from 'react-router-dom';
import {BASE_URL} from '../../constants';

const Registration = ()=>{  

    const [selectedImage, setSelectedImage] = useState(null);
    let navigate = useNavigate();

    const registerUser = async (user)=>{
      const imageName = selectedImage.name;
      user = {...user,imageName};
      // const data = {
      //   "userName":user['firstName']+" "+user['lastName'],
      //   "userImage":user['imageName'],
      //   "userEmail":user['email'],
      //   "password":user['password'],
      //   "selectedImage":selectedImage
      // }

      const form = new FormData();
      form.append("userName",user['firstName']+" "+user['lastName']);
      form.append("userImage",user['imageName']);
      form.append("userEmail",user['email']);
      form.append("password",user['password']);
      form.append("selectedImage",selectedImage);
      console.log(form.get("userName"));
      console.log(form.get("selectedImage"));
      
      const config = {
        method:'POST',
        body: form, 
      }

      await fetch('http://localhost:3000/api/registration',config).then(res=>res.json()).then(data=>{
        console.log("Uploaded successfully: "+data)
      }).catch((err)=>{
        console.log("Got an error while uploading data");
      });      
      
    }

    const validate = Yup.object({
      firstName: Yup.string().max(15, "Characters must be less than 15!").required('*Required'),
      lastName: Yup.string().max(15, "Characters must be less than 15!").required('*Required'),
      email: Yup.string().email("Email is Inavlid!").required('*Email is Required'),
      password: Yup.string().min(6, "Password must be at least 6 characters").required('*Password is Required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'),null], 'Password must match!') .required('*Confirm Password is Required'),
    });
    return(
      <Formik
      initialValues={{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
      }}
      validationSchema={validate}
      onSubmit={(values, action)=>{
        registerUser(values);
        action.resetForm();
      }}
      > 
       {
        formik=>(
          <div className="col-4 offset-4 justify-content-center bd-highlight mt-5 mb-5 card p-5 shadow">
          <h3 className="text-center mb-3">Registration Form</h3> 
          
        {/* {console.log(formik)} */}
        
         <Form>

         <div className="text-center">
         <label htmlFor="img">
         <img className="rounded mx-auto d-block img-fluid" style={{height:'150px', width:'150px'}} src={ selectedImage != null ? URL.createObjectURL(selectedImage) :avatar}/>
         </label>   
         </div> 

         <input id="img" type="file" style={{display:'none'}} onChange={(e)=>{
          ////console.log(e.target.files)
          setSelectedImage(e.target.files[0]);
          }} />
         <TextField label="First Name" name="firstName" type="text"/>
         <TextField label="Last Name" name="lastName" type="text"/>
         <TextField label="Email" name="email" type="email"/>
         <TextField label="Password" name="password" type="password"/>
         <TextField label="Confirm Password" name="confirmPassword" type="password"/>
         <button className="btn btn-primary col-4 offset-4 mt-3" type="submit">Register</button>
         </Form>
         
                
          <a className="text-center m-3" onClick={()=>{
            navigate('/login');
          }}>Already have an account?</a>
          </div>
        )
       } 

    </Formik>
    );
}

export default Registration;