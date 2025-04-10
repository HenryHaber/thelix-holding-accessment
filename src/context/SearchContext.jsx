import React, {createContext, useContext, useEffect, useState} from 'react';
import {useRouter}                                             from 'next/router';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParam = router.query.s;


  useEffect(()=>{

    if(!searchQuery){
      setSearchQuery ('')
    }

    if (searchParam) {
      setSearchQuery(searchParam)
    }
    async function search(){
      setLoading(true)
      if(searchQuery || searchParam){
        try {
          const response = await fetch(`/api/search?search=${searchParam}`);
          const data = await response.json();
          if (data) {
            setSearchResults(data);
          }
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false)
    }


    search()

  }, [router])

  return (
      <SearchContext.Provider value={{ loading, searchParam, setLoading, searchQuery, setSearchQuery, searchResults, setSearchResults }}>
        {children}
      </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
