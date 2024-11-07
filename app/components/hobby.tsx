import React from "react"

// Objek Hobi
const hobbies = [
  {
    id: 1,
    name: "Gaming",
    image: "/img/gaming.jpeg",
  },
  {
    id: 2,
    name: "Membaca Komik",
    image: "/img/baca.jpeg",
  },
  {
    id: 3,
    name: "Nonton Film",
    image: "/img/nonton.jpeg",
  },
]

export default function MyGallery() {
  return (
    <div className="container mx-auto p-6 text-center pt-20">
      <h2 className=" text-2xl font-extrabold mb-8">My Hobby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
