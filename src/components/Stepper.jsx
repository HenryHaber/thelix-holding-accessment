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
      <Flex justify="space-between" align="center" my={6} position="relative">
        {steps.map((step, i) => (
            <Flex direction="column" align="center" key={i}>
              {/*<Flex*/}
              {/*    justify="center"*/}
              {/*    align="center"*/}
              {/*    bg={i === activeStep ? "red.500" : "gray.200"}*/}
              {/*    color={i === activeStep ? "white" : "black"}*/}
              {/*    w={8}*/}
              {/*    h={8}*/}
              {/*    rounded="full"*/}
              {/*    fontWeight="bold"*/}
              {/*    mb={1}*/}
              {/*>*/}
              {/*  {i + 1}*/}
              {/*</Flex>*/}
              {/*<h4 className={'py-3 px-3 border-solid border-2 border-gray-100 rounded-full'}>*/}
              {/*  {i + 1}*/}
              {/*</h4>*/}
              <Text fontSize="xs" color="gray.500">{step.label}</Text>
            </Flex>
        ))}
      </Flex>
  );
};

export default Stepper;
