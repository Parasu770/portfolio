export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse" />
    </div>
  );
}