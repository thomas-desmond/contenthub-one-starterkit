import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const latitude = Number(req.query.latitude);
  const longitude = Number(req.query.longitude);

  const data = await fetch(
    `https://api.geocodify.com/v2/reverse?api_key=${process.env.GEOCODE_API_KEY}&lat=${latitude}&lng=${longitude}`
  );
  const locationData = await data.json();
  // make call 

  res.status(200).json({ data: locationData })
}