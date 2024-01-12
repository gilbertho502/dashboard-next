import { montserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        {children}</body>
        {/* <footer className='py-10 flex justify-center items-center'>
          Made by Gilberto 
        </footer> */}
    </html>
  );
}
