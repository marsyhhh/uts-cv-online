import {
  FaBirthdayCake,
  FaMars,
  FaRulerVertical,
  FaWeight,
  FaHeart,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa"

export default function PersonalInfoSection() {
  const MyInfos = [
    {
      label: "Tanggal Lahir",
      value: "Sumedang, 17 Maret 2003",
      icon: <FaBirthdayCake className="text-yellow-600" />,
    },
    {
      label: "Jenis Kelamin",
      value: "Laki-laki",
      icon: <FaMars className="text-yellow-600" />,
    },
    {
      label: "Tinggi Badan",
      value: "170 cm",
      icon: <FaRulerVertical className="text-yellow-600" />,
    },
    {
      label: "Berat Badan",
      value: "50 kg",
      icon: <FaWeight className="text-yellow-600" />,
    },
    {
      label: "Whatsapp",
      value: "+628996914990",
      icon: <FaWhatsapp className="text-yellow-600" />,
    },
    {
      label: "Email",
      value: "marsyhhhf@gmail.com",
      icon: <FaEnvelope className="text-yellow-600" />,
    },
  ]

  return (
    <div className="container mx-auto p-5 text-center pt-20">
      <h2 className="text-2xl font-bold mb-8">My Info</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MyInfos.map((info, index) => (
          <div
            key={index}
            className="flex items-center shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <div className="text-indigo-500 text-3xl mr-4">{info.icon}</div>
            <div className="text-left">
              <p className="text-lg font-semibold">{info.label}</p>
              <p className="text-gray-600">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
