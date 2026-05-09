import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata = {
  title: "Parasuraman Portfolio",
  description: "AI and Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <ParticlesBackground />
        <AnimatedBackground />
        <Navbar />
        <main className="min-h-screen px-6 md:px-20 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}