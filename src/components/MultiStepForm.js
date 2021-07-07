import React from 'react';
import {useForm,useStep} from 'react-hooks-helper';
//Pages
import Register from './../pages/Register';
import Confirm from './../pages/Confirm';
import Success from './../pages/Success'

const defaultData ={
    fullname:"",
    idcard:"",
    dateOfbirth:"",
    phonenumber:"",
    email:"",
    province:"",
    date:"",
    
};
const steps=[
    {id:'Register'},
    {id:'Confirm'},
    {id:'Success'}
]

export const MultiStepForm = () => {
    const[formData,setForm] = useForm(defaultData);
    const {step,navigation} = useStep({
        steps,
        initialStep:0
    });

    const props={formData,setForm,navigation}

    switch(step.id){
        case "Register":
            return <Register {...props}/>
        case "Confirm":
            return<Confirm {...props}/>
        case "Success":
            return<Success {...props}/>
    }

    

    return (
        <div>
        <h1>MultiStepForm</h1>
        </div>
    )
}
