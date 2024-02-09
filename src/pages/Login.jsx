import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){

    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    const [userMsg,setUserMsg] = useState(true)

    const navigate = useNavigate()

    const userDetails = props.userDetails

    const handleUsername = (e)=>{
        setUsername(e.target.value)
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleUserDetails = ()=>{
        let checkDetails = false

        userDetails.forEach((details)=>{
            if(details.username == username && details.password == password){
                navigate("/landing",{state:{user:username}})
                console.log("login successfully")
                checkDetails = true
            }
        })

        if(checkDetails == false){
            console.log("login failed");
            setUserMsg(false)
        }
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 rounded-md">
                <h1 className="text-3xl font-medium">Hey hi</h1>
                {userMsg?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please Sign Up Before you login!</p> }   

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="username" onChange={handleUsername} className="w-52 p-1 border-black border rounded-md bg-transparent"/>    
                    <input type="text" placeholder="password" onChange={handlePassword} className="w-52 p-1 border-black border rounded-md bg-transparent"/>    
                </div>

                <button onClick={handleUserDetails} className="w-24 rounded-md p-1 bg-orange-500">Login</button>
                <p className="mt-2">Don't have a account ?<Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login