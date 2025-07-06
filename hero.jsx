export default function Hero() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl font-bold text-emerald-700 mb-4">Echo Altar</h1>
      <p className="text-lg text-gray-700 mb-6">Where Music Echoes with the Soul</p>
      <input
        type="text"
        placeholder="Search for songs, artists..."
        className="px-6 py-3 rounded-full border w-full max-w-md shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  )
}
