import React, { useState } from 'react'
import {Button, TextInput, Label, Alert, Spinner} from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [fromData , setFromData] = useState({});
  const [errorMessage ,setErrorMessage] = useState(null);
  const [loading , setLoding] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFromData({...fromData,[e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!fromData.username || !fromData.email || !fromData.password){
      return setErrorMessage("All fields are requried");
    }
    try {
      setLoding(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fromData),
      })
      const data = await res.json();
      if(data.sucess === false){
        setErrorMessage(error.message);
      }
      setLoding(false);
      if(res.ok){
        navigate('/signin');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoding(false);
    }
  }


  return (
    <div className='min-h-screen mt-20'>
      
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*left*/}
        <div className='flex-1'>
      <Link to="/" className='whitespace-nowrap font-bold dark:text-white text-4xl' >
        <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 vai-purple-500 to-pink-500 rounded-lg text-white'>Varun's</span>        
        Blog
        </Link>
        <p className='text-sm mt-5'>
          This is demo project you can sign up with your email and password
          or with Google
        </p>
      </div>
      {/*right*/}
      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your Username'/>
            <TextInput type='text' placeholder='username' id='username' onChange={handleChange} />
          </div>
          <div>
            <Label value='Your Email'/>
            <TextInput type='text' placeholder='emial' id='email' onChange={handleChange} />
          </div>
          <div>
            <Label value='Your Password'/>
            <TextInput type='text' placeholder='password' id='password' onChange={handleChange} />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
            {
              loading ?(
                <>
                <Spinner size='sm' />
                  <span className='pl-3'>Loding...</span>
                  </>
              ) : 'Sign Up'
            }
          </Button>
          <OAuth/>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>SignIn</Link>
        </div>
        {
          errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )
        }
        </div>
      </div>
    </div>
  )
}
