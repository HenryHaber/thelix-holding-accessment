'use client';
import { Box, FormControl, FormLabel, Input, Textarea, Select } from '@chakra-ui/react';

export const FormForTampa = () => {
  return (
      <div className={''}>
        <form className={'flex flex-col gap-4'}>
          <div className={'flex flex-col '}>
            <label>Web Developer</label>
            <input required={true} placeholder={'Enter asset name'} className={'p-4 border-2 border-gray-50'}/>
          </div>
          <div className={'flex flex-col '}>
            <label>Marketing Coordinator</label>
            <textarea  placeholder={'Enter asset description'}  className={'p-4 min-h-40 border-2 border-gray-50'}/>
          </div>
          <div className={' flex-col md:flex-row flex w-full gap-3'}>
            <div className={'flex flex-col w-full md:w-1/2 p-3'}>
              <label>Medical Assistant</label>
              <select className={'flex border-2 border-gray-50  w-full p-3'}>
                <option value="option1">Select Option</option>
              </select>
            </div>
            <div className={'flex flex-col w-full md:w-1/2 p-3'}>
              <label>Web Designer</label>
              <select className={'flex border-2 border-gray-50  w-full p-3'}>
                <option value="option1">Select Option</option>
              </select>
            </div>
          </div>
          <div className={' flex-col md:flex-row flex w-full gap-3'}>
            <div className={'flex flex-col w-full md:w-1/2 p-3'}>
              <label>Nursing Assistant</label>
              <select className={'flex border-2 border-gray-50  w-full p-3'}>
                <option value="option1">Select Option</option>
              </select>
            </div>
            <div className={'flex flex-col w-full md:w-1/2 p-3'}>
              <label>President of Sales</label>
              <select className={'flex border-2 border-gray-50  w-full p-3'}>
                <option value="option1">Select Option</option>
              </select>
            </div>
          </div>
        </form>
      </div>
  );
};

export default FormForTampa;
