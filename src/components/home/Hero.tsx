import { MoveRightIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="flex items-center justify-between md:flex-row flex-col">
      <div className="mx-auto flex-1 shrink-0 lg:mx-0 lg:pt-8">
        <h1 className="text-7xl font-bold text-pretty text-zinc-800 sm:text-7xl">
          Design. <br /> Develop.
          <br /> Deploy.
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
          We craft exceptional digital experiences that ignite your brand&apos;s
          potential. From stunning designs to powerful web applications, we turn
          your vision into reality with precision, creativity, and cutting-edge
          technology.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Button
            asChild
            variant="default"
            className="bg-zinc-800 hover:bg-sky-600"
          >
            <Link href="/contact">Get started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-zinc-100 border-zinc-800 hover:border-sky-600 hover:text-sky-600"
          >
            <Link href="/projects">
              Some of our work <MoveRightIcon />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4">
        <Image
          alt="App screenshot"
          src="/images/wildfire_hero.svg"
          width={600}
          height={600}
          className=""
        />
      </div>
    </div>
  )
}
