import Hero from './components/Hero'
import SongSection from './components/SongSection'

export default function App() {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white min-h-screen text-gray-900 font-sans">
      <Hero />
      <SongSection title="Trending Songs" />
      <SongSection title="Top Playlists" />
      <SongSection title="New Releases" />
    </div>
  )
}
