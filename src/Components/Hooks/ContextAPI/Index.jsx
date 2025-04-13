import { createContext } from "react"

export const MyContext = createContext()

export const MyProvider = ({children}) => {
    const userInfo = {
        username:"frank",
        email:"frank121@gmail.com",
        age:21
    }
    return(
        <MyContext.Provider value={{userInfo}}>
              {children}
        </MyContext.Provider>
    )
}

