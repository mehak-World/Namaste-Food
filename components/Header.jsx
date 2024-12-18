import React from "react"
import HeaderCorousal from './HeaderCorousal'
import {useState} from "react"

const Header = () => {
    const [loginState, setLoginState] = useState(false)


    const changeLoginState = () => {
        setLoginState(!loginState)
    }

    return (
        <>
         <div className = "header">
            <div className = "logo">
                <img height = "100px" width = "100px" src = 'https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760' alt = "app-logo"/>
                <h2>QuickBite</h2>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>< img height = "50px" width = "50px" src = "https://static.vecteezy.com/system/resources/previews/001/504/962/non_2x/shopping-cart-icon-free-vector.jpg" alt = "cart" /></li>
                    <button type="button" class="btn btn-warning" onClick = {changeLoginState}>{loginState ? "Logout" : "Login"}</button> 
                </ul>
            </div>
        </div> 
       
        </>
       
    )
}

export default Header;