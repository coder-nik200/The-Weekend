import './globals.css';

export const metadata = {
  title: 'The Weeknd — After Hours',
  description: 'A midnight broadcast.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
