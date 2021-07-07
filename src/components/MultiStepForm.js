import React from 'react';
import {useForm,useStep} from 'react-hooks-helper';
//Pages
import Register from './../pages/Register';
import Confirm from './../pages/Confirm';
import Success from './../pages/Success'

const defaultData ={
    firstName:"",
    lastName:""
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
    switch(step.id){
        case "Register":
            return <Register/>
        case "Confirm":
            return<Confirm/>
        case "Success":
            return<Success/>
    }

    

    return (
        <div>
        <h1>MultiStepForm</h1>
        </div>
    )
}
