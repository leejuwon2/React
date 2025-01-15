import React, { useState } from 'react';
// 상태가 변할 때 마다 값을 출력

function App3(props) {
    const [ name, setName ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ nameInputValue, setNameInputValue ] = useState("");
    const [ genderInputValue, setGenderInputValue ] = useState("male");

    console.log(nameInputValue);

    const handleNameInputOnChange = (e) => {
        setNameInputValue(e.target.value);
    }
    
    const handleGenderInputOnchange = (e) => {
        setGenderInputValue(e.target.value);
    }

    const handleOkOnClick = () => {
        setName(nameInputValue);
        setNameInputValue("");
        setGender(genderInputValue === "male" ? "남" : "여")
    }
    

    return (
        <div>
            <h1>이름: {name}({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value= {nameInputValue} />
            <input type="radio" id="male"name="gender" onChange={handleGenderInputOnchange} checked={genderInputValue === "male"} value={"male"} /> 
            <label htmlFor="male">남</label>
            <input type="radio"id="female"name="gender" onChange={handleGenderInputOnchange} checked={genderInputValue === "female"} value={"female"} />
            <label htmlFor="female">여</label>
            <button onClick={handleOkOnClick}>확인</button>
        </div>
    );
}

export default App3;