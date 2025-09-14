"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  return (
    <footer className="bg-zinc-100">
      <div className="mx-auto max-w-8xl px-6 pt-16 pb-4 sm:pt-24 lg:px-8 lg:pt-32">
        {pathname !== "/contact" && (
          <div className="mx-auto max-w-2xl text-center">
            <hgroup>
              <h2 className="text-base/7 font-bold text-sky-600">
                Get started
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-balance text-zinc-800 sm:text-5xl">
                Ready to ignite your digital presence?
              </p>
            </hgroup>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-zinc-600">
              Let&apos;s collaborate to create something extraordinary. From
              concept to launch, we&apos;ll transform your ideas into powerful
              digital solutions that drive results.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                variant="default"
                className="bg-zinc-800 hover:bg-sky-600"
              >
                <Link href="/contact">Let&apos;s get this party started</Link>
              </Button>
            </div>
          </div>
        )}
        <div className="mx-auto flex max-w-8xl items-center justify-between py-6 lg:px-20 border-t border-zinc-200 mt-20">
          <Image
            alt="Company name"
            src="/images/wildfire_shadow_logo.svg"
            width={144}
            height={56}
            className="h-9"
          />
          <div className="flex gap-8 flex-row">
            <h3 className="text-sm/6 font-semibold text-zinc-800">Projects</h3>
            <h3 className="text-sm/6 font-semibold text-zinc-800">Blog</h3>
            <h3 className="text-sm/6 font-semibold text-zinc-800">Contact</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
