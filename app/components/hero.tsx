import foto from "../foto.jpg"

function Profile() {
  return (
    <img
      src={foto.src}
      alt="JEY GANS"
      className="rounded-full h-[200px] w-[200px] block border-4 border-yellow-500 mx-auto my-[15px] bg-cover"
    />
  )
}

export default function Hero() {
  return (
    <div className="mx-auto p-2 text-center">
      <div className="text-gray-400 font-bold">CV ONLINE</div>
      <div className="text-3xl">Marsyah Fajar M</div>
      <Profile />
      <div className="flex flex-col items-center">
        <p className="sm:w-1/2 w-full">
          Saya adalah Web Developer. IT Trainer, dan Hobbies Read. Cita-cita
          saya menjadi Programmer Internasional. Saya juga ingin masuk syurga
          tanpa hisab sekeluarga.
        </p>
      </div>
    </div>
  )
}
