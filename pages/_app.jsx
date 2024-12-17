import { ChakraProvider , defaultSystem } from "@chakra-ui/react"
import "@/styles/global.css"
export default function App({ Component, pageProps }) {
  return (
   <ChakraProvider value={defaultSystem }>
      <Component {...pageProps} />
  </ChakraProvider>
  )
}