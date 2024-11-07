interface RowRiwayatProps {
  jenjang: string
  sekolah: string
  tahun: string
}

function RowRiwayat(props: RowRiwayatProps) {
  return (
    <>
      <div className="justify-center text-center mx-4 mt-2 shadow-lg rounded-lg p-4 border border-gray-200 grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-none">
        <div className="text-sm font-semibold">{props.jenjang}</div>
        <div className="text-sm">{props.sekolah}</div>
        <div className="text-sm">{props.tahun}</div>
      </div>
    </>
  )
}

interface RowPekerjaanProps {
  perusahaan: string
  tahun: string
  instansi: string
  pekerjaan: string
}

function RowPekerjaan(props: RowPekerjaanProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="sm:w-1/2 w-full">
          <div className="justify-center text-center mx-4 mt-2 shadow-lg rounded-lg p-4 border border-gray-200 grid grid-rows-4 sm:grid-cols-4 sm:grid-rows-none">
            <div className="text-sm font-semibold">{props.perusahaan}</div>
            <div className="text-sm">{props.tahun}</div>
            <div className="text-sm">{props.instansi}</div>
            <div className="text-sm">{props.pekerjaan}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function RiwayatPendidikan() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="sm:w-1/2 w-full pt-20">
          <div className="text-2xl mx-auto text-center font-bold mb-5">
            Riwayat Pendidikan
          </div>
          <RowRiwayat jenjang="SD" sekolah="SDN Mariuk" tahun="24525" />
          <RowRiwayat
            jenjang="SMP"
            sekolah="SMPN 1 Tanjungsari"
            tahun="24525"
          />
          <RowRiwayat jenjang="SMK" sekolah="SDN Mariuk" tahun="24525" />
        </div>
      </div>

      <div className="pt-20">
        <div className="text-2xl mx-auto text-center font-bold mb-5">
          Riwayat Pekerjaan
        </div>
      </div>
      <RowPekerjaan
        perusahaan="PT. Maju Bersama"
        tahun="2021 - Sekarang"
        instansi="Swasta"
        pekerjaan="Manajer Proyek"
      />
      <RowPekerjaan
        perusahaan="CV. Digital Kreatif"
        tahun="2019 - 2020"
        instansi="Swasta"
        pekerjaan="Spesialis Media Sosial"
      />
      <RowPekerjaan
        perusahaan="PT. Teknologi XYZ"
        tahun="2017 - 2019"
        instansi="Swasta"
        pekerjaan="Pengembang Web"
      />
      <RowPekerjaan
        perusahaan="Sekolah Dasar ABC"
        tahun="2015 - 2017"
        instansi="Pendidikan"
        pekerjaan="Guru Kelas 5"
      />
    </>
  )
}
