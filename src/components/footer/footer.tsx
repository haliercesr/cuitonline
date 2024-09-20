"use client"
import Link from "next/link"

export default function Footer() {

  return (
    <footer className="w-full text-center text-sm text-gray-500 py-4 border-t mt-8">
      <p>
        Linl2007-2024 © CuitOnline |
        <Link href="privacity-policy"> Política de Privacidad</Link> |
        <Link href="faq"> Preguntas frecuentes</Link> |
        <Link href="contact"> Contacto</Link>
      </p>
    </footer>
  )
}