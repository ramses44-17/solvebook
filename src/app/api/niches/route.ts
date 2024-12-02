import dbConnect from "@/lib/connectdb";
import Niche from "@/models/niches";
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await dbConnect();
    
    const niches = await Niche.find();
    
    return new NextResponse(JSON.stringify({
      "data":niches
    }), {
      status: 200,
    });
  } catch (e) {
    return new NextResponse(JSON.stringify({
      "message":"failed to fetch",
    }), { status: 500 });
  }
}