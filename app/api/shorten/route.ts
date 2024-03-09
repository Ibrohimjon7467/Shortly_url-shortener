import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { url } = body;

    if (!url) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const shortenedURL = await fetch(`https://cleanuri.com/api/v1/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await shortenedURL.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
