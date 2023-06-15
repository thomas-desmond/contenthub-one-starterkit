import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lng");
  
  const locationInfo = await fetch(
    `https://api.geocodify.com/v2/reverse?api_key=${process.env.GEOCODE_API_KEY}&lat=${latitude}&lng=${longitude}`
  );
  const data = await locationInfo.json();
  const locationData = data.response.features[0].properties;

  return NextResponse.json({ locationData });
}
