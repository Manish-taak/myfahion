
import { Connectdatabase } from "@/helper/serverHelper";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export const POST = async (req: Request, res: NextResponse) => {
    try {
        const userdata = await req.json();
        await Connectdatabase();
        const post = await prisma.user.create({ data: userdata })
        return NextResponse.json({ message: "user created", data: post }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "user not created" }, { status: 400 })
    } finally {
        await prisma.$disconnect()
    }
}


