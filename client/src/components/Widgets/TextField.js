import React from "react";
import {ErrorMessage ,useField } from "formik";

export const TextField = ({label, ...props})=>{
    const[field, meta] = useField(props);
    // console.log("Fields: ",field, "Meta data: ",meta);
    return(
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input className={`form-control shadow-none w-5 mb-2 ${meta.touched && meta.error && `is-invalid`}`} autoComplete="off" {...field} {...props}/>
            <ErrorMessage component="div" name={field.name} className="text-danger" />
        </div> 
        );
}