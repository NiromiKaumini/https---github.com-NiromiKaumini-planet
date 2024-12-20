// app/api/route.ts

import { NextResponse } from 'next/server';
import { ApodData } from './types'; // Import the type definition

export async function GET() {
  const apiKey = 'XwurtxUodg1tfEcx5PHx1ndGXJWWcJBim7niTTI6'; // Replace with your actual NASA API key
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: response.status });
    }

    const data: ApodData = await response.json(); // Ensure TypeScript understands the data type
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching APOD:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
