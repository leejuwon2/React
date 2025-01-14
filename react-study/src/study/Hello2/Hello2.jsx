import "./style.css";

export function printConsole() {
    console.log("hello2파일 입니다.");
}


// 디폴트가 아닌 함수들은 함수 앞에 export 적음
export function printConsole2() {
    console.log("hello2파일 입니다.");
}


// 리액트 함수는 대문자 시작
function Hello2() {
    const h1Text = 'Hello React!!';
    const h1 = <h1>{h1Text}</h1>;

    return <>
        {h1}
        <label className="box" htmlFor="username">아이디</label>
        <input id="username" />
    </>
}


export default Hello2; 