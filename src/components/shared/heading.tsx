import { cn } from "@/utils"
import React, { ReactNode } from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export const Heading = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
