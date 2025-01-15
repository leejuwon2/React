import React, { useState } from 'react';
import Signup from './components/sign/Signup/Signup';
import Signin from './components/sign/Signin/Signin';

function App6(props) {
    const [ path, setPath ] = useState("signin");
    const [ userList, setUser ] = useState([]); 

    const handlePageChangeButtonOnClick = (e, path) => {
        setPath(path);
    };

    return (
        <div>
            <button onClick={(e) => handlePageChangeButtonOnClick(e, "signin")}>로그인</button>
            <button onClick={(e) => handlePageChangeButtonOnClick(e, "signup")}>회원가입</button>
            {
                path === "signin" && <Signin userList={userList} />
            }
            {
                path === "signup" && <Signup userList={userList} setUser={setUser}/>
            }
        </div>
    );
}

export default App6;