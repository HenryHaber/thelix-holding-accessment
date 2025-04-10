import {createContext, useContext, useEffect, useState} from 'react';


export const StoreContext = createContext({
    storeProducts: {},
    saveProducts: ()=>{},
    getProducts: ()=>{},
});

export const useStore = () => {
    return useContext(StoreContext);
};

export function StoreProvider({ children }) {

    const [storeProducts, setStoreProducts] = useState([]); // Set initial user state to null
    // const router = useRouter()

    useEffect(()=>{

        if(typeof window !== 'undefined'){
            let storeData = JSON.parse(sessionStorage.getItem('products'));
            if(!storeData){
                saveProducts(storeData)
                setStoreProducts(storeData)
            }
            else{
                saveProducts(storeData)
                setStoreProducts(storeData)
            }
        }

    },[])

    // Define functions to handle authentication (e.g., login, logout, check if user is logged in)


    function saveProducts(data) {
        sessionStorage.setItem('products', JSON.stringify(data))
    }

    function getProducts() {
        JSON.parse(sessionStorage.getItem('products'))
    }

    // Create an object with authentication-related functions and user data
    const StoreContextValue = {
        storeProducts,
        saveProducts,
        getProducts
    };

    return <StoreContext.Provider value={StoreContextValue}>{children}</StoreContext.Provider>;
}
