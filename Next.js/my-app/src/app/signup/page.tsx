"use client"
import Link from 'next/link';
import React from 'react';

export default function SignupPage(){
    const [user, setUser] = React.useState({username: "", email: "", password: ""});
    
    const onSingup = () => {
        // Handle signup logic
    }

    return (
        <div className="signup">
            <h1>Signup Page</h1>
            
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

                <button onClick={onSingup}>
                    Signup
                </button>

                <Link href="/login" className="login-link">
                    Already have an account? Login
                </Link>
        </div>
    )
}