"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Header from "@/components/header"
import Footer from "@/components/footer/footer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for demonstration
const mockResults = [
  { name: "MACCARINI JULIO CESAR JULIO CESAR", cuit: "20-06311509-3", type: "Persona Física (masculino)" },
  { name: "FOSCHIATTI JULIO CESAR JULIO CESAR", cuit: "20-20884520-6", type: "Persona Física (masculino)" },
  { name: "PALACIOS JULIO CESAR JULIO CESAR", cuit: "20-22288510-5", type: "Persona Física (masculino)" },
  { name: "MORAGA JULIO CESAR JULIO CESAR", cuit: "20-29249224-3", type: "Persona Física (masculino)" },
  { name: "PEREZ JULIO CESAR JULIO CESAR", cuit: "20-31555556-6", type: "Persona Física (masculino)" },
  { name: "NUNEZ JULIO CESAR JULIO CESAR", cuit: "20-34545452-3", type: "Persona Física (masculino)" },
  { name: "BETTINGER JULIO CESAR JULIO CESAR", cuit: "20-37556560-9", type: "Persona Física (masculino)" },
  { name: "CESAR JULIO", cuit: "20-16641390-9", type: "Persona Física (masculino)" },
  { name: "CESAR JULIO", cuit: "20-16839350-2", type: "Persona Física (masculino)" },
]

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("julio cesar")
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 10
  const totalResults = 34468 // Mock total results
  const [hasResults, setHasResults] = useState(true)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would trigger an API call
    // For now, we'll just toggle the results state
    setHasResults(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header setHasResults={setHasResults}></Header>
      {hasResults ? <main className="flex-grow flex max-w-6xl mx-auto w-full mt-6">
        <aside className="w-64 pr-6">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">FILTRAR RESULTADOS</h3>
            <Button className="w-full bg-blue-500 text-white">Aplicar Filtros</Button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Condición</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="inscripto" />
                  <label htmlFor="inscripto" className="ml-2 text-sm">
                    Inscripto (24339)
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="no-inscripto" />
                  <label htmlFor="no-inscripto" className="ml-2 text-sm">
                    No Inscripto (10129)
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">IVA</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="iva-inscripto" />
                  <label htmlFor="iva-inscripto" className="ml-2 text-sm">
                    Inscripto (1731)
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="iva-no-inscripto" />
                  <label htmlFor="iva-no-inscripto" className="ml-2 text-sm">
                    No Inscripto (32484)
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Monotributo</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="monotributo-inscripto" />
                  <label htmlFor="monotributo-inscripto" className="ml-2 text-sm">
                    Inscripto (4285)
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="monotributo-no-inscripto" />
                  <label htmlFor="monotributo-no-inscripto" className="ml-2 text-sm">
                    No Inscripto (30183)
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Empleador</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="empleador-si" />
                  <label htmlFor="empleador-si" className="ml-2 text-sm">
                    Si (904)
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="empleador-no" />
                  <label htmlFor="empleador-no" className="ml-2 text-sm">
                    No (33564)
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tipo Persona</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="persona-fisica" />
                  <label htmlFor="persona-fisica" className="ml-2 text-sm">
                    Física (34392)
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="persona-juridica" />
                  <label htmlFor="persona-juridica" className="ml-2 text-sm">
                    Jurídica (76)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-grow">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">{totalResults} personas encontradas</span>
            <div className="text-sm">
              Usted buscó: <span className="font-semibold">{searchQuery}</span>
            </div>
          </div>
          <div className="space-y-4">
            {mockResults.map((result, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-2">{result.name}</h2>
                <p className="mb-1">
                  <span className="font-semibold">CUIT:</span> {result.cuit}{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    » Constancia de inscripción
                  </a>
                </p>
                <p>
                  <span className="font-semibold">{result.type}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <Button
                className="bg-white rounded-l-md px-2 py-1 text-sm font-medium text-black-500 hover:bg-gray-50"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              >
                Anterior
              </Button>
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <Button
                  key={page}
                  className={`px-3 py-1 text-sm font-medium ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "bg-white text-balck-500 hover:bg-gray-50"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              <Button className="bg-white px-2 py-1 text-sm font-medium text-black-500 hover:bg-gray-50">
                Siguiente »
              </Button>
            </nav>
          </div>
        </div>
      </main>
      :<main className="flex-grow max-w-6xl mx-auto w-full mt-6 px-4">
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
      </main>}
      <Footer></Footer>
    </div>
  )
}