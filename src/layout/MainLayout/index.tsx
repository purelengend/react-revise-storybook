import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

// Components
import { Header, Sidebar } from "@/components";

// Contexts
import { SidebarContext, UrlContextProvider } from "@/context";

const MainLayout = (props: { children?: React.ReactNode }) => {
  const { sidebarState } = useContext(SidebarContext);

  return (
    <Box
      w="full"
      h="full"
      bg="white"
      pl={{
        md: sidebarState ? 270 : 0,
      }}
      transition="all 0.325s ease-in-out"
    >
      <Sidebar />

      <UrlContextProvider>
        <Header />

        <Outlet />
        {props.children}
      </UrlContextProvider>
    </Box>
  );
};

export default MainLayout;
