
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-blue-700">
        Manajemen Siswa
      </h1>

      <p className="text-lg text-gray-600">
        Selamat datang di aplikasi manajemen siswa.
      </p>

      <div className="flex gap-4">
        <a
          href="/dashboard"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Dashboard
        </a>

        <a
          href="/kelas"
          className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          Data Kelas
        </a>
      </div>
    </main>
  );
}
