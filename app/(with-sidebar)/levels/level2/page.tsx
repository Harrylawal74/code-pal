export default function CenteredContent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full mx-50">
      <div className="p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">I am centered!</h1>
        <p className="text-black">Resize the window — I stay in the center.</p>
      </div>
    </div>
  );
}