import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticlesBackground from "@/components/ParticlesBackground";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

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
    <html lang="en" suppressHydrationWarning><body><ThemeProvider><LoadingScreen /><ScrollProgress /><ParticlesBackground /><AnimatedBackground /><Navbar /><main className="min-h-screen px-6 md:px-20 py-10">{children}</main><Footer /></ThemeProvider></body></html>
  );
}