"use client"
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookie from "js-cookie"
import React, { createContext } from "react";

const refreshToken = JSON.parse(Cookie.get("refreshToken") || "{}")
console.log("first", refreshToken)
const myWixClient = createClient({
    modules: {
        products,
        collections
    },
    auth: OAuthStrategy({
        clientId: "7e9a08bf-c590-4218-9532-6d71bf9777ef",
        tokens: {
            refreshToken,
            accessToken: { value: "", expiresAt: 0 }
        }
    })
})

export type wixclinet = typeof myWixClient
export const WixclinetContext = createContext<wixclinet>(myWixClient)

export const WixclinetContextProvider = ({ children }: { children: React.ReactNode }) => {
    return <WixclinetContext.Provider value={myWixClient}>{children}</WixclinetContext.Provider>
}