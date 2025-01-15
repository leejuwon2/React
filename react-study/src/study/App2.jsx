
import { useState } from "react";

/*
    useState 상태관리
*/



function App2() {
    const [ num, setNum ] = useState(0);

    let number = 0;

    console.log(num);
    console.log(number);

    const handleIncreseOnClick = () => {
        
        if(num < 9){
            setNum(num + 1);        
        }
        return;
    }
    const handleDecreaseOnClick = () => {
        if(num > -9){
            setNum(num - 1);  // 1 감소
        }
        return;
    };

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreseOnClick}>1증가</button>
        <button onClick={handleDecreaseOnClick}>1감소</button>
    </>
}

export default App2;