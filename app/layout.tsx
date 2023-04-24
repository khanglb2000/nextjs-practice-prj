import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav>
          <h1>My Nav Bar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
