// types.ts
export interface ApodData {
  date: string;
  explanation: string;
  hdurl?: string; // Optional property
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
