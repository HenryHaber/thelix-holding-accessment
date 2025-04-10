"use client"

import { Box, Heading } from "@chakra-ui/layout";
import Dashboard        from '@/components/user.dashboard';
import Loading               from '@/components/Loading'
import {useEffect, useState} from 'react';
import { IoSettings } from "react-icons/io5";

/**
 * External Dependencies.
 */


export default  function dashboard(){

  const [loading, setLoading] = useState(true);
  const user =
      {
        "name":"Eric Omotolani"
      }

  const offices = [
    {
      "name":"Nursing Assistant",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Nursing Assistant",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Web Designer",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Dog Trainer",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Nursing Assistant",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Marketing Coordinator",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Marketing Coordinator",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Nursing Assistant",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Web Designer",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Medical Assistant",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Marketing Coordinator",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Nursing Assistant",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Web Designer",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Medical Assistant",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
    {
      "name":"Medical Assistant",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "icon": <IoSettings/>,
    },
  ]
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, [user]);


  const CardGrid = () => {
    return (
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-2'}>
          {offices.map((office, index) => (
              <div key={index} className={'flex-1 min-52-40 sm:min-60 max-w-full flex-col gap-2 my-4 bg-white p-5 rounded-2xl'}>
                <div className={'flex gap-2 items-center'}>
                  <div className={'bg-gray-200 rounded-full p-2'}>
                    {office.icon}
                  </div>
                </div>
                <h3 className={'font-bold text-xl'}>{office.name}</h3>
                <p className={'text-lg font-thin'}>{office.description}</p>
              </div>
          ))}
        </div>
    );
  };

    return(
      <Box>
        {loading ? <Loading /> :  (
          <div>
            <div>
              <h3 className={'font-bold text-3xl'}>
                Hello {user.name}
              </h3>
              <p className={'text-lg font-thin'}>Welcome to your dashboard</p>
            </div>
            <CardGrid />
          </div>
        )}
      </Box>
  )
}
