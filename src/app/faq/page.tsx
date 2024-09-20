"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Headerwithoutinput from "@/components/headerwithoutinput"
import Footer from "@/components/footer/footer"

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50">
     <Headerwithoutinput area={"FAQ"}></Headerwithoutinput>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Qué es el CUIT?</AccordionTrigger>
                <AccordionContent>
                  El CUIT (Clave Única de Identificación Tributaria) es un número único e irrepetible que se otorga a todas las personas físicas o jurídicas para poder identificarlas en sus actividades fiscales y comerciales en Argentina.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Cómo puedo obtener mi CUIT?</AccordionTrigger>
                <AccordionContent>
                  Para obtener su CUIT, debe acercarse a una oficina de la AFIP con su DNI y una constancia de domicilio. También puede solicitarlo en línea a través del sitio web de la AFIP si cuenta con clave fiscal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Cuál es la diferencia entre CUIT y CUIL?</AccordionTrigger>
                <AccordionContent>
                  El CUIT se utiliza para identificar a contribuyentes (personas físicas o jurídicas) ante la AFIP. El CUIL (Código Único de Identificación Laboral) se utiliza para identificar a los trabajadores en relación de dependencia ante la ANSES y la AFIP.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Cómo puedo verificar si un CUIT es válido?</AccordionTrigger>
                <AccordionContent>
                  Puede verificar la validez de un CUIT utilizando nuestro servicio de búsqueda en CuitOnline. También puede hacerlo a través del sitio web oficial de la AFIP en la sección de "Constancia de Inscripción".
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>¿Qué información puedo obtener con un CUIT?</AccordionTrigger>
                <AccordionContent>
                  Con un CUIT, puede obtener información sobre el estado fiscal de una persona o empresa, incluyendo su condición frente al IVA, si está inscrito en el régimen de Monotributo, y otros datos relevantes para transacciones comerciales.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}