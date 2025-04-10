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
      <div className={'flex  gap-4 overflow-auto'}>
        {steps.map((step, i) => (
            <div className={'flex flex-col items-center '} key={i}>
              <h4 className={'p-5  w-20  h-20 items-center flex t border-solid border-2 border-gray-100 rounded-full justify-center'}>
                {i + 1}
              </h4>
              <p className={'text-nowrap'}>{step.label}</p>
            </div>
        ))}
      </div>
  );
};

export default Stepper;
