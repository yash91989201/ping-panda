import React from "react"
import { Navbar } from "@/components/shared/navbar"

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
