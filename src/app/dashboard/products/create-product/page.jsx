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
      label: 'Products',
      path: '/dashboard/products/',
    },
    {
      label: 'Create a Product ',
      path: '/dashboard/products/create-product',
    },
  ];

    return(
      <PublicLayout breadcrumbTitle={'Products'} breadcrumb={breadcrumbsData}>
        {loading ? <Loading /> :  (
          <div className={' md:container px-2 md:px-10 rounded-md'}>
            <Stepper activeStep={2} />
            <div className={'bg-white'}>
              <LocationTabs />
            </div>
          </div>
        )}
      </PublicLayout>
  )
}