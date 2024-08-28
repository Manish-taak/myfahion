import { Connectdatabase } from "@/helper/serverHelper";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";


export const POST = async (req: Request , res: NextResponse)=>{
try {
    const jobdata = await req.json();
    await Connectdatabase();
    console.log(jobdata,"=================")
    const post = await prisma.jobapply.create({data:jobdata})
    return NextResponse.json(
        { message: "user created", data: post },
        { status: 200 }
      );
} catch (error) {
    console.log(error,"err======================")
   return  NextResponse.json({message : "data not posted", error}, { status:400})
}
finally{
await prisma.$disconnect();
}
}