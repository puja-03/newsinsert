import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
const { default: DbConnect } = require("@/app/utlis/DbConnect");


DbConnect();
export async function POST(req){

    let {name ,email, password} = await req.json();
    const hashedPassword = await bcrypt.hash(password,8)
    let userData= new User({name,email,password:hashedPassword})

    try{
        await userData.save();
        return NextResponse.json({userData,"msg":"created data successfully"})
    }
    catch(e){
        return NextResponse.json({"msg":"somethings went is worng"})
    }
}