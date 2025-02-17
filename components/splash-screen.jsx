"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login after animation
    const timer = setTimeout(() => {
      router.push("/login")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="mb-4"
        >
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mx-auto">
            <h1 className="text-primary text-xl font-bold">Healthcare</h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

