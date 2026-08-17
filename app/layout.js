import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "The Weeknd — After Hours",
  description: "A midnight broadcast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B3CS6DNKQP"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B3CS6DNKQP');
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
