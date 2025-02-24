"use client"

import { motion } from "framer-motion"

export default function DownwardArrow() {
  return (
    <div className="flex justify-center items-start ">
      <motion.svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        initial="start"
        animate="end"
        variants={{
          start: {
            y: [0, 20],
            opacity: [0, 1, 0],
          },
          end: {
            y: [0, 20],
            opacity: [0, 1, 0],
          },
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <path
          d="M25 5 L25 45 M10 30 L25 45 L40 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  )
}

