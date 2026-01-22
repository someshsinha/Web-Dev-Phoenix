//usage of signup router => to take username,email and password from user
//and then add them to the database
import bcryptjs from 'bcryptjs';
import User from '@/models/userModel';
import {connect} from '@/dbConfig/dbConfig';
import {NextResponse,NextRequest} from 'next/server';

connect();

export async function POST(request) {
    try{
        const reqBody=await request.json();
        const {username,email,password}=reqBody;
    
        //check if user already exists  
        const existingUser=await User.findOne({email});
        if(existingUser){
            return NextResponse.json({message:"User already exists"}, {status:400});
        }
    
        //hash the password
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);
        //create a new user
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        });

        //save the user to the database
        await newUser.save();
    
        return NextResponse.json({message:"User registered successfully"}, {status:201});
    }
    catch(error){
        console.log("Error in user signup:",error);
        return NextResponse.json({message:"Internal Server Error"}, {status:500});
    }
}