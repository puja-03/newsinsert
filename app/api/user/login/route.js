import User from "@/app/models/User";
import DbConnect from "@/app/utlis/DbConnect";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs"

DbConnect();

export async function POST(req){
  const {email, password} = await req.json();

  const user = await User.findOne({email:email})

  if(user){

    const ispassword = await bcrypt.compare(password, user.password);

    if(ispassword){
        const token = sign({_id:user._id},"asdfghjklertyuio")
        const serialized = serialize("cookie_name",token,{
            httpOnly:true,
        }) 
        return new NextResponse(JSON.stringify({user,msg:"login successfully"}),
        {
            headers:{"Set-Cookie":serialized}
        }
        )
    }
    else{
      return NextResponse.json({msg:"wrong email or password"})
    }
  }
  else{
    return NextResponse.json({msg:"user does not exist please register"})
  }
}