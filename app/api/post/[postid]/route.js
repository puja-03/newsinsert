import DbConnect from "@/app/utlis/DbConnect";
import { NextResponse } from "next/server";
import Post from "@/app/models/Post";

DbConnect();
export async function GET (req,{params}){
    let{postid} = params;
    let data = await Post.findById(postid)
    return NextResponse.json({data})
}

export async function DELETE (req, {params}){
   let {postid}  = params;
   let data = await Post.findByIdAndDelete(postid);
   return NextResponse.json({data,"msg":"data delteted successfully"});
}

//for edit the record
export async function PUT(req,{params}){
    let{postid} = params;
    let data = await req.json();
    let updatedData;
    try{
      updatedData = await Post.findByIdAndUpdate(postid,data);
    }
    catch(e){
      return NextResponse.json({"msg":e.message})
    }
    return NextResponse.json({updatedData,"msg":"data update successfull"})
  }