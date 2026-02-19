import React, { useId } from 'react'

function Logo({ width = '100px' }) {
  const id = useId()
  const s = id.replace(/:/g, '')
  return (
    <div className="flex items-center gap-2">
      <svg
        width={width}
        height={width}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 drop-shadow-md transition-transform hover:scale-105"
      >
        {/* Background shape - rounded hexagon style */}
        <path
          d="M24 2L44 14v20L24 46L4 34V14L24 2z"
          fill={`url(#bg-${s})`}
        />
        <path
          d="M24 2L44 14v20L24 46L4 34V14L24 2z"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
        />
        {/* Bold M for MegaBlog */}
        <path
          d="M14 32V16l8 12 8-12v16M12 16h4M32 16h4"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <defs>
          <linearGradient id={`bg-${s}`} x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hidden sm:inline">
        MegaBlog
      </span>
    </div>
  )
}

export default Logo