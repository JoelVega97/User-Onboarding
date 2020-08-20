import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import formSchema from './formSchema'
import * as yup from 'yup'
import User from './Components/User'
import UserForm from './Components/UserForms'

const initalValues = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  avatar: '', 
  tos: false
}

const initalErrors = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
}

const initalUsers = []
const initalDisabled = true


function App() {

  const [users, setUsers] = useState(initalUsers)
  const [values, setValues] = useState(initalValues)
  const [errors, setErrors] = useState(initalErrors)
  const [disabled, setDisabled] = useState(initalDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(function(res){
        setUsers(res.data.data)
      })
      .catch(function(err){
        console.log('oops')
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
        console.log(users)
      })
      .catch(err => {
        console.log('uh oh')
      })
      .finally(() => {
        setValues(initalValues)
      })
  }

  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [name]: ''
      })
    })
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0]
      })
    })

    setValues({
      ...values,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
      setValues({
        ...values,
        [name]: isChecked
      })
  }

  const submit = () => {
    const newUser = {
      email: values.email.trim(),
      first_name: values.first_name.trim(),
      last_name: values.last_name.trim(),
      avatar: values.avatar.trim()
    }
    postNewUser(newUser)
    debugger
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(values)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [values])

  return (
    <div className="App">
      <h1>Friend-Maker</h1>

      <UserForm 
            values = {values}
            inputChange = {inputChange}
            checkboxChange = {checkboxChange}
            submit = {submit}
            disabled = {disabled}
            errors = {errors}
          />
      {
      users.map(user => {
        return (
          <User key = {user.id} details = {user} />
        )
      })
      }
    </div>
  );
}

export default App;
