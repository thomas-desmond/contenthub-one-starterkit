import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const latitude = Number(req.query.lat);
  const longitude = Number(req.query.lng);
  console.log(latitude, longitude);

  const data = await fetch(
    `https://api.geocodify.com/v2/reverse?api_key=${process.env.GEOCODE_API_KEY}&lat=${latitude}&lng=${longitude}`
  );
  const info = await data.json();
  const locationData = info.response.features[0].properties;

  res.status(200).json({ data: locationData })
}