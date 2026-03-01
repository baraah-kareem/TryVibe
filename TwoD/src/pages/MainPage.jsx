import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 p-6 bg-gradient-to-br from-[#f0f8ff]/50 to-[#1a65a8]/50">
      <div className="mx-auto max-w-7xl px-4 py-5">
<h1 className="text-4xl font-extrabold mb-10 text-center text-[#1a3e6c] font-sans tracking-wide">
  Choose the page you want to go to
</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {/* Fabric 2D */}
  <div
    onClick={() => navigate("/two-d")}
    className="cursor-pointer rounded-2xl p-8 bg-white/80 backdrop-blur shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="text-5xl mb-4">🧵</div>
    <h2 className="text-xl font-semibold mb-2">Fabric 2D</h2>
    <p className="text-gray-600 mb-6">
      Design and customize fabrics in 2D view
    </p>
    <button className="px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition">
      Open 2D Editor
    </button>
  </div>

  {/* Fabric 3D */}
  <div
    onClick={() => window.open("http://localhost:5174/", "_blank")}
    className="cursor-pointer rounded-2xl p-8 bg-white/80 backdrop-blur shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="text-5xl mb-4">🧶</div>
    <h2 className="text-xl font-semibold mb-2">Fabric 3D</h2>
    <p className="text-gray-600 mb-6">
      Visualize fabrics in an interactive 3D view
    </p>
    <button className="px-5 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition">
      Open 3D Viewer
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

export default MainPage;