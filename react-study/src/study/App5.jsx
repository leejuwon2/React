import React, { useState } from 'react';

function App5(props) {
    /**
     * 회원 정보를 입력받아 userList에 user객체들을 가입하기 버튼을 누를 때 마다 저장한다.
     * 로그인 정보를 입력받아 userList에 해당 username이 있는지 확인하고
     * 없으면 '사용자 정보를 다시 확인하세요.' 메세지 출력
     * 있으면 비밀번호가 일치하는지 검사
     * 비밀번호가 일치하지 않으면 '사용자 정보를 다시 확인하세요.' 메세지 출력
     * 일치하면 이름(이메일)님 환영합니다. 출력(alert)
     */

    const [ userList, setUser ] = useState([]);

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


    const handleSignUpClick = () => {
        setUser([
        ...userList,
        {
            username: inputValue.username,
            password: inputValue.password,
            name: inputValue.name,
            email: inputValue.email,
        }
    ])

    setInputValue({
        username: "",
        password: "",
        name: "",
        email: "",
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
            <h1>회원가입</h1>
            <input type="text" name='username' onChange={handleInputOnchange} value={inputValue.username}placeholder='username' />
            <input type="password" name='password'onChange={handleInputOnchange}value={inputValue.password}placeholder='password'/>
            <input type="text" name='name' onChange={handleInputOnchange} value={inputValue.name}placeholder='name'/>
            <input type="text" name='email' onChange={handleInputOnchange} value={inputValue.email}placeholder='email'/>
            <div>
                <button onClick={handleSignUpClick}>가입하기</button>
            </div>
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

export default App5;