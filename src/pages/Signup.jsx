import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props){

    const navigate = useNavigate()

    const userDetails = props.userDetails
    const setUserDetails = props.setUserDetails

    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleUserDetails = () => {
        setUserDetails([...userDetails,{username:username,password:password}])
        navigate("/")
    }


    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 rounded-md">
                <h1 className="text-3xl font-medium">Hey hi</h1>
                <p>Sign up here :)</p>   

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handleUsername} placeholder="username" className="w-52 p-1 border-black border rounded-md bg-transparent"/>    
                    <input type="text" onChange={handlePassword} placeholder="password" className="w-52 p-1 border-black border rounded-md bg-transparent"/>    
                    <input type="text" placeholder="confirm password" className="w-52 p-1 border-black border rounded-md bg-transparent"/>    
                </div>

                <button onClick={handleUserDetails} className="w-24 rounded-md p-1 bg-purple-500">Signup</button>
                <p className="mt-2">Already have an account ?<Link to={"/"} className="underline">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup