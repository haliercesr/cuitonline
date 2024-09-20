"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("alfaconsultores")
  const [hasResults, setHasResults] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would trigger an API call
    // For now, we'll just toggle the results state
    setHasResults(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full p-4 bg-white border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className="w-10 h-10 text-blue-500"
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
            <span className="text-2xl font-bold ml-2">
              <span className="text-blue-500">cuit</span>
              <span className="text-gray-700">online</span>
            </span>
          </div>
          <form onSubmit={handleSearch} className="flex">
            <Input
              className="w-64 mr-2"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
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
          </form>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full mt-6 px-4">
        {!hasResults && (
          <div className="space-y-6">
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
              <p>
                Su búsqueda no obtuvo resultados, verifique las palabras ingresadas e inténtelo nuevamente.
                Si conoce el nombre y número de cuit, puede solicitar los informes utilizando los sig. formularios.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">INFORMES Y CONSTANCIAS</h2>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">INFORMES DATEAS</h3>
                <form className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Seleccione tipo de persona:</Label>
                    <RadioGroup defaultValue="fisica" className="flex space-x-4 mt-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fisica" id="fisica" />
                        <Label htmlFor="fisica">Física</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="juridica" id="juridica" />
                        <Label htmlFor="juridica">Jurídica</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Seleccione tipo de informe:</Label>
                    <RadioGroup defaultValue="comercial" className="flex space-x-4 mt-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comercial" id="comercial" />
                        <Label htmlFor="comercial">Comercial</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="localizacion" id="localizacion" />
                        <Label htmlFor="localizacion">Localización</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dni" className="text-sm font-medium">DNI:</Label>
                      <Input id="dni" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="apellido" className="text-sm font-medium">Apellido:</Label>
                      <Input id="apellido" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="nombre" className="text-sm font-medium">Nombre:</Label>
                      <Input id="nombre" className="mt-1" />
                    </div>
                  </div>
                  
                  <Button className="bg-blue-500 text-white">PEDIR INFORME</Button>
                </form>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-4">INFORMES GRATUITOS</h3>
                <form className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Seleccione tipo de informe:</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Constancia de Inscripción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="constancia">Constancia de Inscripción</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="cuit" className="text-sm font-medium">CUIT/CUIL:</Label>
                    <Input id="cuit" className="mt-1" />
                  </div>
                  
                  <Button className="bg-blue-500 text-white">PEDIR INFORME</Button>
                </form>
              </div>
            </div>
          </div>
        )}

        {hasResults && (
          <div>
            {/* Results content would go here */}
            <p>Search results for: {searchQuery}</p>
          </div>
        )}
      </main>

      <footer className="w-full text-center text-sm text-gray-500 py-4 border-t mt-8">
        <p>2007-2024 © CuitOnline | Política de Privacidad | Preguntas frecuentes | Contacto</p>
      </footer>
    </div>
  )
}