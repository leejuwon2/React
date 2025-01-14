import React from "react"

function Hello() {
    // 리턴 옆에 아무것도 없으면 fragment
    // fragment 생략됨
    return <> 
        <h1>Hello react!!</h1>
        <input type="text" />
    </>
}

export default Hello;