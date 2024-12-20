// app/api/page.tsx

"use client"; // Ensure this is at the top for client-side rendering

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApodData } from './types'; // Adjust path based on your folder structure

const HomePage = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null); // Use defined type
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get<ApodData>('/api'); // Fetch from your new API route
        setApodData(response.data);
      } catch (err) {
        setError('Error fetching APOD');
        console.error(err);
      }
    };

    fetchApod();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      {apodData ? (
        <div>
          <h2>{apodData.title}</h2>
          {apodData.media_type === 'image' ? (
            <img src={apodData.url} alt={apodData.title} />
          ) : (
            <iframe 
              title={apodData.title} 
              src={apodData.url} 
              frameBorder="0" 
              allowFullScreen 
            />
          )}
          <p>{apodData.explanation}</p>
          {apodData.hdurl && (
            <a href={apodData.hdurl} target="_blank" rel="noopener noreferrer">View High-Resolution Image</a>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
