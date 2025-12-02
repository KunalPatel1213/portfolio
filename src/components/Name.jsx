import React from 'react'

const Line = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900 py-6 sticky top-0 z-50">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
      
      <div className="flex animate-scroll whitespace-nowrap">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-green-400 to-gray-400 bg-clip-text text-transparent px-6">
          Kunal Patel Kunal Patel Kunal Patel Kunal Patel Kunal Patel Kunal Patel Kunal Patel Kunal Patel
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-green-400 to-gray-400 bg-clip-text text-transparent px-6">
          Kunal Patel Kunal Patel Kunal Patel Kunal Patel Kunal Patel Kunal Patel Kunal Patel Kunal Patel
        </h1>
      </div>
    </div>
  )
}

export default Line