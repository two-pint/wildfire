"use client"

import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { XIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-zinc-100">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-20"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Wildfire</span>
            <Image
              src="/images/wildfire_shadow_logo.svg"
              alt="logo"
              width={144}
              height={56}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-800"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-bold text-zinc-800"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            variant="default"
            className="text-base font-bold text-zinc-100"
          >
            <Link href="/contact">Say hello 👋</Link>
          </Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-100 p-6 sm:shadow-md sm:max-w-sm sm:ring-1 sm:ring-zinc-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Wildfire</span>
              <Image
                src="/images/wildfire_shadow_logo.svg"
                alt="logo"
                width={144}
                height={56}
                // className="drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-zinc-800"
            >
              <span className="sr-only">Close menu</span>
              <XIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-800 hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  asChild
                  variant="default"
                  className="text-base font-bold text-zinc-100 w-full"
                >
                  <Link href="/contact">Say hello 👋</Link>
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
