;import useAuth          from "@/context/AuthContext";
import { Box, Heading } from "@chakra-ui/layout";
import Dashboard        from '@/components/user.dashboard';
import Loading from '@/components/Loading'

/**
 * External Dependencies.
 */



export default function dashboard(){

    const {  user, loading} = useAuth();
    return(
      <Box>
        {loading? <Loading /> : <Dashboard user={user} />}
      </Box>
  )
}
