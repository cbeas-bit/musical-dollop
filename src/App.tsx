import { Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

const EMAIL = "contacto@ejemplo.cl"
const WHATSAPP = "56912345678" // formato internacional, sin +
const ADDRESS = "Av. Irarrázaval 2401 OF 607, Ñuñoa, Santiago"
const CATEGORIES = ["Electrónica", "Hogar", "Moda", "Deportes", "Juguetes", "Oficina", "Belleza", "Mascotas"]

const placeholder = (n: string) =>
  `https://placehold.co/600x400/0f766e/ffffff?text=${encodeURIComponent(n)}`

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <a href="#" className="font-bold text-primary">Mi Tienda</a>
          <div className="flex gap-6 text-sm">
            <a href="#categorias" className="hover:text-primary">Categorías</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-br from-primary to-secondary text-white">
          <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Todo lo que necesitas, en un solo lugar</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
              Productos de calidad en múltiples categorías, con atención cercana y precios convenientes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="outline" className="h-11 px-6 text-foreground" render={<a href="#categorias" />}>
                Ver categorías
              </Button>
              <Button size="lg" variant="secondary" className="h-11 px-6 ring-1 ring-white/40" render={<a href="#contacto" />}>
                Contáctanos
              </Button>
            </div>
          </div>
        </section>

        <section id="categorias" className="mx-auto max-w-6xl scroll-mt-14 px-4 py-20">
          <h2 className="text-center text-3xl font-bold">Nuestras categorías</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Card key={c} className="overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-lg">
                <img src={placeholder(c)} alt={c} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                <CardContent className="p-4">
                  <CardTitle>{c}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contacto" className="scroll-mt-14 bg-muted py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Contacto</h2>
              <ul className="mt-8 space-y-5">
                <li className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <a className="hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="text-primary" />
                  <a className="hover:underline" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                    WhatsApp: +{WHATSAPP}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  <span>{ADDRESS}</span>
                </li>
              </ul>
            </div>
            <iframe
              title="Ubicación"
              className="h-80 w-full rounded-lg border-0 shadow"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
            />
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-6 text-center text-sm text-secondary-foreground">
        © {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.
      </footer>
    </>
  )
}
