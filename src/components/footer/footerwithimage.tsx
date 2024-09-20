"use client"
import Link from "next/link"

export default function Footerwithimage() {
  return (
    <footer className="w-full max-w-2xl text-center text-sm text-gray-500 mb-4">
      <p>
        Linl2007-2024 © CuitOnline |
        <Link href="privacity-policy"> Política de Privacidad</Link> |
        <Link href="faq"> Preguntas frecuentes</Link> |
        <Link href="contact"> Contacto</Link>
      </p>
      <div className="mt-2 flex justify-center items-center">
        <svg
          className="w-8 h-8 text-blue-500"
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
      </div>
    </footer>
  )
}