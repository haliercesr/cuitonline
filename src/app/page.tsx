"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"
import { useRouter } from 'next/navigation'
import Footerwithimage from "@/components/footer/footerwithimage"

export default function Component() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white p-4">
      <header className="w-full max-w-2xl mt-8">
        <ModeToggle></ModeToggle>
        <div className="flex justify-center items-center">
          <svg
            className="w-12 h-12 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
            />
          </svg>
          <span className="text-3xl font-bold ml-2">
            <span className="text-blue-500">cuit</span>
            <span className="text-gray-700">online</span>
          </span>
        </div>
      </header>

      <main className="w-full max-w-2xl flex-grow flex flex-col items-center justify-center">
        <div className="w-full flex">
          <Input
            className="flex-grow rounded-r-none"
            placeholder="Ingrese nombre, razón social, DNI, CUIT o CUIL"
          />
          <Button type="submit" onClick={() => router.push('/search')} className="rounded-l-none bg-gray-200 text-gray-700 hover:bg-gray-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Button>
        </div>
        <div className="mt-8 w-full h-32 bg-gray-100 flex items-center justify-center text-gray-400">
          Ad Space
        </div>
      </main>

      <Footerwithimage></Footerwithimage>
    </div>
  )
}