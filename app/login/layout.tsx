// app/layout.tsx
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional if using Bootstrap

export const metadata = {
  title: 'PlanetTec',
  description: 'Login to your account',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
