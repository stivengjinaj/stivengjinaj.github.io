import './App.css'
import Navbar from "./Navbar.tsx";
import HeroSection from "./Landing/HeroSection.tsx";

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
        <main className="xl:ml-12 xl:pt-20">
            <div className="flex flex-col gap-24">
                <HeroSection />
            </div>
        </main>
    </div>
  )
}

export default App
