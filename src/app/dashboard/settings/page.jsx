"use client"

import { Box, Heading } from "@chakra-ui/layout";
import Dashboard        from '@/components/user.dashboard';
import Loading               from '@/components/Loading'
import {useEffect, useState} from 'react';

/**
 * External Dependencies.
 */



export default  function dashboard(){

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

    // const {  user, loading} = useAuth();
    return(
      <Box>
        {loading ? <Loading /> :  (
          <Box>
            <Heading as="h1" size="lg" mb={4}>
              Settings
            </Heading>
          </Box>
        )}
      </Box>
  )
}
