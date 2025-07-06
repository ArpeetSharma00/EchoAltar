export default function SongSection({ title }) {
  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-semibold text-emerald-600 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="bg-white p-4 shadow-md rounded-lg hover:scale-105 transition-transform">
            <div className="h-40 bg-gray-200 mb-2 rounded"></div>
            <p className="text-sm font-medium text-gray-800">Song {num}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
