"use client"
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'; 
import {useRouter} from "next/navigation";

export default function SignupPage(){
    const Router=useRouter();
    const [user, setUser] = React.useState({username: "", email: "", password: ""});
    const [loading,setLoading]=React.useState(false);
    const [buttonDisabled,setButtonDisabled]=React.useState(true);
    const onSingup = async() => {
        // Handle signup logic
        setLoading(true);
        try{
            const responset=await axios.post('/api/users/signup', user)
            toast.success("Signup Successful");
            Router.push('/login');
        }catch(error){
            console.log("Signup error",error);
            toast.error(error.message);
        }
        finally{
        setLoading(false);
        }
    }
    React.useEffect(()=>{
        if(user.username.length>0 && user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }},[user]
)

    return (
        <div className="signup">
            <h1>{loading?"Processing...":"Signup Page"}</h1>
            {/* Input Fields */}
                <label className="form">
                    <span>Username</span>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={user.username} 
                        onChange={(e) => setUser({...user, username: e.target.value})} 
                    />
                </label>

                <label className="form">
                    <span>Email</span>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={user.email} 
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                    />
                </label>

                <label className="form">
                    <span>Password</span>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={user.password} 
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                    />            
                </label>

                <button onClick={onSingup} disabled={buttonDisabled||loading}>
                    Signup
                </button>

                <Link href="/login" className="login-link">
                    Already have an account? Login
                </Link>
        </div>
    )
}
/*
It should take the data from the input fields and sent it to the 
backend API for user registration.
*/