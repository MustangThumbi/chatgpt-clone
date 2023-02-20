"use client"
import { Toaster } from "react-hot-toast"


function Clientprovider() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default Clientprovider