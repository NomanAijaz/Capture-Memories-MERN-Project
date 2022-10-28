import  React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { TextField } from '../Widgets/TextField';
import {useNavigate} from 'react-router-dom';
export const Login = ()=>{

    const validate = Yup.object({
        email: Yup.string().email('Email is Inavlid!').required('*Email is Required'),
        password: Yup.string().min(6, 'paswword must be greater than 6 characters').required('*Password is Required'),
       // rememberMe: Yup.bool().oneOf([true],'You need to accept the terms and conditions'),
    });

    let navigate = useNavigate();

    return(
        <Formik
        initialValues={{
            email:'',
            password:'',
            rememberMe:false
        }}
        validationSchema ={validate}
        onSubmit={(values, action)=>{
            console.log(values);
            action.resetForm();
        }}
        >
         {
            formik=>(
                <div className='col-4 offset-4 justify-content-center bd-highlight mt-5 mb-5 card p-5 shadow'> 
                    <h3 className='text-center mb-3'>Login</h3> 
                <Form>
                
                    <TextField name="email" label="Email" type="email" />
                    <TextField name="password" label="Password" type="password" />
                    <div class="form-check mt-3">
                        <input className="form-check-input" name='rememberMe' type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mb-3" for="flexCheckDefault">
                             Remember Me?
                        </label>
                    </div>
                    <button type="submit" className='btn btn-primary offset-4 col-4'>Login</button><br/>
                </Form>
                <a onClick={()=>navigate('/registration')} className='text-center m-3'>Don't have any Account?</a>
                </div>
            )
         }     
        </Formik>
    );
}