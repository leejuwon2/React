import React, { useState } from 'react';

function Signin({ userList}) {

    const [loginInput, setLoginInput] = useState({  // 로그인 입력값
            username: "",
            password: "",
        })

    const handleLoginInputChange = (e) => {
        const {name, value} = e.target;
        setLoginInput({
            ...loginInput,
            [name]: value,
        })
    }    

    
    const handleLoginClick = () => {
        const foundUser = userList.find(user =>  user.username === loginInput.username);
        if (!foundUser) {
            alert("사용자 정보를 다시 확인하세요.")
        } else if (foundUser.password !== loginInput.password){
            alert("사용자 정보를 다시 확인하세요.")
        } else {
            alert(`${foundUser.name}(${foundUser.email})님 환영합니다.`)
        }
        setLoginInput({
            username:"",
            password:"",
        })
    }
    
    
    return (
        <div>
                <h1>로그인</h1>
            <div>
            <input type="text" name='username' onChange={handleLoginInputChange} value={loginInput.username} placeholder='username' />
            <input type="password" name='password' onChange={handleLoginInputChange} value={loginInput.password} placeholder='password'/>
            </div>
            <div>
                 <button onClick={handleLoginClick}>로그인</button>
            </div>
        </div>
    );
}

export default Signin;