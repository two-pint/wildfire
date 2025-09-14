import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"

export default function Home() {
  return (
    <div className="w-full">
      <main className="mx-auto pt-24 flex max-w-8xl flex-col items-center justify-between p-6 lg:px-20">
        <Hero />
        <Services />
      </main>
    </div>
  )
}
