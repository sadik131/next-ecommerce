"use client"

import { useContext } from "react"
import { WixclinetContext } from "../context/WixContext"

export const useWixClient = () =>{
    return useContext(WixclinetContext)

}