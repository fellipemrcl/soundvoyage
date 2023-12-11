"use client";

import Box from "@/components/Box";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <MoonLoader color="#FFC300" size={40} />
    </Box>
  );
};

export default Loading;
