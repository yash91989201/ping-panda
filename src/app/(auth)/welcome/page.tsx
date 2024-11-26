"use client"
import { BackgroundPattern } from "@/components/background-pattern"
import { Heading } from "@/components/shared/heading"
import { LoadingSpinner } from "@/components/shared/loading-spinner"
import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ["get-database-sync-status"],
    queryFn: async () => {
      const res = await client.auth.getDatabaseSyncStatus.$get()
      return await res.json()
    },
    refetchInterval: (query) => (query.state.data?.isSynced ? false : 1000),
  })

  useEffect(() => {
    if (data?.isSynced) {
      router.push("/dashboard")
    }
  }, [data, router])

  return (
    <div className="flex w-full flex-1 items-center justify-center px-4">
      <BackgroundPattern className="absolute inset-0 left-1/2 z-0 -translate-x-1/2 opacity-75" />

      <div className="relative z-10 flex -translate-y-1/2 flex-col items-center gap-6 text-center">
        <LoadingSpinner size="md" />
        <Heading>Creating your account...</Heading>
        <p className="text-base/7 text-gray-600 max-w-prose">
          Just a moment while we set things up for you.
        </p>
      </div>
    </div>
  )
}
