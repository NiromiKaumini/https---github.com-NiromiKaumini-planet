// app/api/types.ts

export interface ApodData {
  date: string;
  explanation: string;
  hdurl?: string; // Optional property for high-definition URL
  media_type: string;
  service_version: string;
  title: string;
  url: string; // URL for the image or video
}
