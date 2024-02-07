import Image from 'next/image'
import React from 'react'

export default function DailyMix() {
  return (
    <div className="grid grid-cols-6 gap-4 mt-4">
    <a
      href="#"
      className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
    >
      <Image
        src="/album.jpeg"
        className="w-full"
        width={120}
        height={120}
        alt="Capa do album And Justice For All"
      />
      <strong className="font-semibold">Daily Mix-1 </strong>
      <span className="text-sm text-zinc-400">
        Metallica, Iron Maiden and Nirvana
      </span>
    </a>
    <a
      href="#"
      className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
    >
      <Image
        src="/album.jpeg"
        className="w-full"
        width={120}
        height={120}
        alt="Capa do album And Justice For All"
      />
      <strong className="font-semibold">Daily Mix-2 </strong>
      <span className="text-sm text-zinc-400">
        Metallica, Iron Maiden and Nirvana
      </span>
    </a>{" "}
    <a
      href="#"
      className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
    >
      <Image
        src="/album.jpeg"
        className="w-full"
        width={120}
        height={120}
        alt="Capa do album And Justice For All"
      />
      <strong className="font-semibold">Daily Mix-3 </strong>
      <span className="text-sm text-zinc-400">
        Metallica, Iron Maiden and Nirvana
      </span>
    </a>{" "}
    <a
      href="#"
      className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
    >
      <Image
        src="/album.jpeg"
        className="w-full"
        width={120}
        height={120}
        alt="Capa do album And Justice For All"
      />
      <strong className="font-semibold">Daily Mix-4 </strong>
      <span className="text-sm text-zinc-400">
        Metallica, Iron Maiden and Nirvana
      </span>
    </a>{" "}
    <a
      href="#"
      className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
    >
      <Image
        src="/album.jpeg"
        className="w-full"
        width={120}
        height={120}
        alt="Capa do album And Justice For All"
      />
      <strong className="font-semibold">Daily Mix-5 </strong>
      <span className="text-sm text-zinc-400">
        Metallica, Iron Maiden and Nirvana
      </span>
    </a>
    <a
      href="#"
      className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
    >
      <Image
        src="/album.jpeg"
        className="w-full"
        width={120}
        height={120}
        alt="Capa do album And Justice For All"
      />
      <strong className="font-semibold">Daily Mix-6 </strong>
      <span className="text-sm text-zinc-400">
        Metallica, Iron Maiden and Nirvana
      </span>
    </a>
  </div>
  )
}
