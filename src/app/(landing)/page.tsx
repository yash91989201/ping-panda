import { Heading } from "@/components/shared/heading"
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper"
import { ShinyButton } from "@/components/shared/shiny-button"
import { Check } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-8">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              PingPanda is the easiest way to monitor your SaaS. Get instant
              notifications for&nbsp;
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>
              &nbsp; sent directly to your discord
            </p>
            <ul className="text-left flex flex-col space-y-2 text-base/7 text-gray-600 sm:items-start">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once use forever",
                "Track sales, new users or any other events",
              ].map((point, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Start for free today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}
