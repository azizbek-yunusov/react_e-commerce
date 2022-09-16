import React from 'react'
import { motion } from "framer-motion";

const AnimationLayout = ({children}) => {
  return (
    <motion.div
      className="container text-center"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {children}
    </motion.div>
  )
}

export default AnimationLayout