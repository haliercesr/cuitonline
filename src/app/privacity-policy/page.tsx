"use client"
import { Button } from "@/components/ui/button"
import Headerwithoutinput from "@/components/headerwithoutinput"
import Footer from "@/components/footer/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Headerwithoutinput area={"Política de Privacidad"}></Headerwithoutinput>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Política de Privacidad de CuitOnline</h2>
            <p className="mb-4">
              En CuitOnline, accesible desde https://www.cuitonline.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que es recolectada y registrada por CuitOnline y cómo la usamos.
            </p>
            <h3 className="text-xl font-semibold mb-2">Información que recolectamos</h3>
            <p className="mb-4">
              Cuando usted se registra en nuestro sitio, recolectamos la información que nos proporciona voluntariamente, que puede incluir su nombre, dirección de correo electrónico y otra información personal.
            </p>
            <h3 className="text-xl font-semibold mb-2">Cómo usamos su información</h3>
            <p className="mb-4">
              Usamos la información que recolectamos de varias formas, incluyendo:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Proporcionar, operar y mantener nuestro sitio web</li>
              <li>Mejorar, personalizar y expandir nuestro sitio web</li>
              <li>Entender y analizar cómo usa nuestro sitio web</li>
              <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Cookies</h3>
            <p className="mb-4">
              CuitOnline usa 'cookies'. Estas cookies se usan para almacenar información, incluyendo las preferencias de los visitantes y las páginas del sitio web a las que el visitante accedió o visitó.
            </p>
            <h3 className="text-xl font-semibold mb-2">Políticas de privacidad de terceros</h3>
            <p className="mb-4">
              La Política de Privacidad de CuitOnline no se aplica a otros anunciantes o sitios web. Por lo tanto, le aconsejamos que consulte las respectivas Políticas de Privacidad de estos servidores de anuncios de terceros para obtener información más detallada.
            </p>
            <Button className="mt-4">Aceptar Política de Privacidad</Button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}