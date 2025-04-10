"use client"

import { Box, Heading } from "@chakra-ui/layout";
import Dashboard        from '@/components/user.dashboard';
import Loading               from '@/components/Loading'
import {useEffect, useState} from 'react';
import PublicLayout from '@/components/PublicLayout';
import Stepper from '@/components/Stepper'
import LocationTabs from '@/components/LocationTabs';
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
  const breadcrumbsData = [
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      label: 'Nintendo',
      path: '/dashboard/nintendo/',
    },
    {
      label: 'New Murabaha Financing ',
      path: '/dashboard/nintendo/new-request',
    },
  ];

    return(
      <PublicLayout breadcrumbTitle={'Nintendo'} breadcrumb={breadcrumbsData}>
        {loading ? <Loading /> :  (
          <div className={'container px-10 rounded-md'}>
            <Stepper activeStep={2} />
            <div className={'bg-white'}>
              <LocationTabs />
            </div>
          </div>
        )}
      </PublicLayout>
  )
}
