import React, { useEffect, useReducer, useState } from 'react';

function App10(props) {
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);

    const unmount = () => {
        console.log("장착해제됨");
    }
    const mount = () => {
        console.log("장착됨2"); // 처음 실행할 때는 return 값이 없어서 여기서 멈춤
        return unmount; // 화면이 바뀌면 return값이 생기고 unmount에서 다시 내려옴
        }

    useEffect(mount);

    useEffect(() => {
        console.log(num1);
        setNum2(num1 + 100); 
    },  [num1]);

    useEffect(() => {
        console.log(num1);
        console.log(num2);
    }, [num1, num2]); // 배열 안에 두개의 값 중 하나라도 변한다면 실행

    useEffect(() => {
        console.log("마운트!!!")
    },[]); //비어있는 배열 - 최초 한번만 실행
        
    const handleOnClick = () => {
        setNum1(num1 + 10);
        
    }

    console.log("?????");


    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>

            <button onClick={handleOnClick}>클릭</button>
        </div>
    );
}

export default App10;
