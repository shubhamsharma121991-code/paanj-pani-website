export const metadata = {
  title: "Paanj Pani",
  description: "Premium Alkaline Water"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
