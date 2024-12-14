import { ContextProvider } from './ContextApi'

export default function RootLayout({children}){
    return(
       <ContextProvider>
        {children}
       </ContextProvider> 
    )
}