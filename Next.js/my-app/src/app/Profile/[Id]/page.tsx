"use client"
import {useParams} from 'next/navigation';
import React from 'react';
export default function UserProfilePage(){
    const params=useParams();
    return (
        <div className="profile">
            <h1 className="render">User Profile Page</h1>
            <p>User ID: <span className="id">{params.Id}</span></p>
        </div>
    )
}