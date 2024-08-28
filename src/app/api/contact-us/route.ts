import { Connectdatabase } from "@/helper/serverHelper";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const contactdata = await req.json();
    await Connectdatabase();
    console.log(contactdata)
    const post = await prisma.contactus.create({ data: contactdata })
    return NextResponse.json(
      { message: "user created", data: post },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "data not posted" }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
};
