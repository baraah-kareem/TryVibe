import React, { useState, useEffect } from "react";
import coatIcon from "../assets/Icon/trench-coat.png";
import vestIcon from "../assets/Icon/vest.png";
import jacketIcon from "../assets/Icon/jacket.png";
import trousersIcon from "../assets/Icon/trouser.png";
import shirtIcon from "../assets/Icon/casual-t-shirt-.png";
import tieIcon from "../assets/Icon/tie.png";
import blazerIcon from "../assets/Icon/blazer.png";

import color1 from "../assets/images/1.png";
import color2 from "../assets/images/2.jpg";
import color3 from "../assets/images/3.jpg";
import color4 from "../assets/images/4.jpg";
import color5 from "../assets/images/5.jpg";
import color6 from "../assets/images/6.jpg";
import color7 from "../assets/images/7.jpg";
import { useNavigate } from "react-router-dom";
// Product Categories
const PRODUCT_TYPE_CATEGORY = {
  Coat: "coat",
  Vest: "vest",
  Jacket: "jacket",
  Pants: "trouser",
  Shirt: "shirt",
  Tie: "accessory",
  Blazer: "blazer",
};

// Icons map
const ICONS_MAP = {
  coat: coatIcon,
  vest: vestIcon,
  jacket: jacketIcon,
  blazer: blazerIcon,
  trouser: trousersIcon,
  shirt: shirtIcon,
  accessory: tieIcon,
};

// Colors
const COLORS = [
  { name: "Black", value: "#000000", image: color1 },
  { name: "White", value: "#ffffff", image: color2 },
  { name: "Red", value: "#ef4444", image: color3 },
  { name: "Blue", value: "#3b82f6", image: color4 },
    { name: "Blue", value: "#3b82f6", image: color5 },
  { name: "Blue", value: "#3b82f6", image: color6 },
  { name: "Blue", value: "#3b82f6", image: color7 },

];

// Helper to shuffle array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

function Fabric() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [shuffledCategories, setShuffledCategories] = useState([]);
  const [shuffledColors, setShuffledColors] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    setShuffledCategories(shuffleArray(Object.entries(PRODUCT_TYPE_CATEGORY)));
    setShuffledColors(shuffleArray(COLORS));
  }, []);

  useEffect(() => {
    setSelectedColor(null);
  }, [selectedCategory]);

  return (
  <div className="flex-1 pt-5 p-6 min-h-screen bg-gradient-to-br from-[#f0f8ff]/50 to-[#1a65a8]/50">
      <div className="mx-auto max-w-7xl px-4 py-5">
<div className="mb-6 rounded-xl bg-white px-4 py-3 shadow-sm border border-slate-200">
  <button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition"
  >
    ← Back to Main
  </button>
</div>
      <div className="flex gap-10">

        {/* Left side: Categories + Colors */}
        <div className="h-[80vh] min-w-[400px] overflow-hidden bg-white rounded-2xl border border-slate-200">
          <div className="h-full overflow-y-auto p-4">

            {/* Models Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 max-w-md mx-auto">

              {/* Header */}
              <div className="mb-3 flex items-end justify-between">
                <div>
                  <div className="text-sm font-semibold">Models</div>
                  <div className="text-xs opacity-60">Select a Model</div>
                </div>
                <div className="text-xs opacity-60">
                  {shuffledCategories.length}
                </div>
              </div>

              {/* Models Grid */}
              <div className="max-h-[260px] overflow-auto pr-1">
                <div className="grid grid-cols-2 gap-2 auto-rows-max">
                  {shuffledCategories.map(([name, category]) => (
                    <button
                      key={name}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left rounded-xl border bg-white shadow-sm transition
                        hover:border-slate-300
                        ${
                          selectedCategory === category
                            ? "border-slate-900 ring-2 ring-slate-900/10"
                            : "border-slate-200"
                        }
                      `}
                    >
                      <div className="p-2">
                        <div className="h-20 w-20 overflow-hidden rounded-lg bg-slate-100">
                          <img
                            src={ICONS_MAP[category]}
                            alt={name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="mt-2">
                          <div className="text-sm font-semibold leading-tight">
                            {name}
                          </div>
                          <div className="text-[11px] opacity-70">
                            Click to select
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
                    <div className="my-4 h-px bg-slate-200"></div>
                      {selectedCategory && (
                      <>
                        {/* Fabrics Header */}
                        <div className="mb-3 flex items-end justify-between">
                          <div>
                            <div className="text-sm font-semibold">Fabrics</div>
                          </div>
                          <div className="text-xs opacity-60">
                            {shuffledColors.length}
                          </div>
                        </div>

                        {/* Fabrics Grid */}
                        <div className="max-h-[420px] overflow-auto pr-1">
                          <div className="grid grid-cols-2 gap-2 auto-rows-max">
                            {shuffledColors.map((color) => (
                              <button
                                key={color.name}
                                onClick={() => setSelectedColor(color.image)}
                                className={`w-full text-left rounded-xl border bg-white shadow-sm transition
                                  hover:border-slate-300
                                  ${
                                    selectedColor === color.image
                                      ? "border-slate-900 ring-2 ring-slate-900/10"
                                      : "border-slate-200"
                                  }
                                `}
                              >
                                <div className="p-2">
                                  <div className="h-20 w-full overflow-hidden rounded-lg bg-slate-100">
                                    <img
                                      src={color.image}
                                      alt={color.name}
                                      className="h-full w-full object-cover"
                                      loading="lazy"
                                    />
                                  </div>

                                  <div className="mt-2">
                                    <div className="text-sm font-semibold leading-tight">
                                      {color.name}
                                    </div>
                                    <div className="text-[11px] opacity-70">
                                      Repeat: 3x
                                    </div>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
          </div>
      </div>

        {/* Main display */}
          <div className="flex-1 flex justify-center items-start">
            {selectedCategory ? (
              <div className="flex flex-col items-center h-[80vh] min-w-[770px] overflow-hidden bg-white backdrop-blur-md rounded-xl p-6 shadow-lg space-y-4 transition-all duration-500 hover:shadow-2xl ">
                {ICONS_MAP[selectedCategory] && selectedColor ? (
                  <div
                    className="w-80 h-80 sm:w-96 sm:h-96 rounded-lg shadow-inner"
                    style={{
                      backgroundImage: `url(${selectedColor})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      WebkitMaskImage: `url(${ICONS_MAP[selectedCategory]})`,
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      WebkitMaskPosition: "center",
                      WebkitMaskComposite: "destination-in",
                      maskImage: `url(${ICONS_MAP[selectedCategory]})`,
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      maskPosition: "center",
                      maskComposite: "intersect",
                    }}
                  />
                ) : (
                  <span className="text-gray-500 text-lg">Choose a Fabrics</span>
                )}

                <div className="text-center text-gray-700 font-medium text-base">
                  {selectedColor ? "Your Selection" : "Select a Fabrics to preview"}
                </div>
              </div>
            ) : (
              <span className="text-gray-500 text-lg">Choose Model</span>
            )}
          </div>
        </div>
       
      </div>

    </div>
  );
}

export default Fabric;
