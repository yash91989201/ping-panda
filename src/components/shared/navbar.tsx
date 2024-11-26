import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Separator } from "@ui/separator"
import { currentUser } from "@clerk/nextjs/server"

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky z-50 h-16 inset-x-0 top-0   w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            Ping
            <span className="text-brand-700">Panda</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="ghost">
                    Sign Out
                  </Button>
                </SignOutButton>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    className: "sm:flex items-center gap-3",
                  })}
                >
                  Dashboard <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "sm:flex items-center gap-3",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "sm:flex items-center gap-3",
                  })}
                >
                  Sign In
                </Link>
                <Separator orientation="vertical" className="h-8" />
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1.5",
                  })}
                >
                  Sign Up <ArrowRight className="size-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
