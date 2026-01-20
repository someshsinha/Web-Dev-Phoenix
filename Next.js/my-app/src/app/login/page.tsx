"use client"
import React from 'react';
import Link from 'next/link';
export default function LoginPage(){
    const [user, setUser] = React.useState({email: "", password: ""});
    
    const onLogin = () => {
        // Handle signup logic
    }

    return (
        <div className="signup">
            <h1>Login Page</h1>
            
            {/* Input Fields */}
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

                <button onClick={onLogin}>
                    Login
                </button>

                <Link href="/signup" className="login-link">
                    Don't have an account? Signup
                </Link>
        </div>
    )
}