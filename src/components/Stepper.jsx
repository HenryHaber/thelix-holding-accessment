import { Box, Flex, Text } from "@chakra-ui/react";

const steps = [
  { label: "2 weeks ago" },
  { label: "1 month ago" },
  { label: "5 hours ago" },
  { label: "15 minutes ago" },
  { label: "2 months ago" },
];

const Stepper = ({ activeStep }) => {
  return (
      <div className={'flex gap-4 overflow-auto no-scrollbar'}>
        {steps.map((step, i) => (
            <div
                className={'items-center justify-center flex flex-col'}
                key={i}
            >
              <h4
                  className={`flex text-black flex-col items-center p-2 w-10 h-10  border-solid  hover:text-white hover:bg-[#A93636] border-2 border-gray-100 
                  rounded-full justify-center ${activeStep === i ? 'bg-[#A93636] text-white' : ''}`}
              >
                {i + 1}
              </h4>
              <p className={`text-nowrap  ${activeStep === i ? 'text-[#A93636] ' : ''} } `}>{step.label}</p>
            </div>
        ))}
      </div>
  );
};

export default Stepper;