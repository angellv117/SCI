
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Derechos reservados 2024
        </footer>
      </body>
    </html>
  );
}
