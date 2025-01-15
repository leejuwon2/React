import React, { useState } from 'react';

function Signup({ userList, setUser }) {
    
    const [ inputValue, setInputValue] = useState({
            username: "",
            password: "",
            name: "",
            email: "",
        })
    

    const handleInputOnchange = (e) => {
        const {name, value} = e.target;

        setInputValue({
            ...inputValue,
            [name]: value,
        })
    } 

    
    const handleSignUpClick = () => {
        setUser([
        ...userList,
        inputValue,
    ])
    }

    return (
        <div>
             <h1>회원가입</h1>
            <input type="text" name='username' onChange={handleInputOnchange} value={inputValue.username}placeholder='username' />
            <input type="password" name='password'onChange={handleInputOnchange}value={inputValue.password}placeholder='password'/>
            <input type="text" name='name' onChange={handleInputOnchange} value={inputValue.name}placeholder='name'/>
            <input type="text" name='email' onChange={handleInputOnchange} value={inputValue.email}placeholder='email'/>
            <div>
                <button onClick={handleSignUpClick}>가입하기</button>
            </div>
        </div>
    );
}


export default Signup;