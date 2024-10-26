import React, { Component } from 'react'
import FormDetails from './FormDetails';
import ContactDetails from './ContactDetails';
import AddressDetail from './AddressDetail';
import Confirm from './Confirm';
import Sucess from './Sucess';

export class Userform extends Component {
    state={
        step:1,
        firstname:'',
        lastname:'',
        email:'',
        phonenumber:'',
        password:'',
        city:''

    }
    nextStep=()=>{
        const {step}= this.state;
        this.setState({
            step: step+1
        });
    }
    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        })
    }
    handlesChanges=input=>e=>{
        this.setState({[input]:e.target.value})

    }
  render() {
const {step, firstname, lastname, email , phonenumber, password, city}=this.state;
const values = {firstname, lastname, email, phonenumber, password, city};

switch(step){
    case 1:
        return <FormDetails
        nextStep={this.nextStep}
        handlesChanges={this.handlesChanges}
        values ={values} 
        />
    case 2: 
    return <ContactDetails
    nextStep={this.nextStep}
    prevStep={this.prevStep}
        handlesChanges={this.handlesChanges}
        values ={values} />
    case 3:
        return <AddressDetail 
        nextStep={this.nextStep}
    prevStep={this.prevStep}
        handlesChanges={this.handlesChanges}
        values ={values}
        />
    case 4:
        return <Confirm
        nextStep={this.nextStep}
    prevStep={this.prevStep}
        values ={values}
        
        />

    case 5:
        return <Sucess/>
}

   


  }
}

export default Userform