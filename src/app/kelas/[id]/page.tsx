
"use client";

import { useParams } from "next/navigation";

export default function DetailKelas() {
  const params = useParams();

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-700">
        Detail Kelas
      </h1>

      <p className="mt-4">
        ID Kelas: {params.id}
      </p>

      <a href="/kelas" className="text-blue-600 underline">
        Kembali ke Data Kelas
      </a>
    </main>
  );
}
