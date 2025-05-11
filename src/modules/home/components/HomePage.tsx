"use client";
import { Box, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import dynamic from "next/dynamic";

// SSR olmadan dinamik yükleniyor
const EmbeddableList = dynamic(() => import("./List"), { ssr: false });
// Gerekirse bunu da dinamik yap
// const NoClientLayout = dynamic(() => import("@/.../NoClientLayout"), { ssr: false });

import NoClientLayout from "@/modules/common/layout/components/NoClientLayout";

interface HomePageProps {
  apps: string[];
  chainId: string;
}

const HomePage: FC<HomePageProps> = ({ apps, chainId }) => {
  return (
    <NoClientLayout>
      <Box>
        <Heading textAlign="start" fontWeight="600" fontSize="24px">
          Explore Apps created by community
        </Heading>
        <EmbeddableList apps={apps} chainId={chainId} />
      </Box>
    </NoClientLayout>
  );
};

export default HomePage;
