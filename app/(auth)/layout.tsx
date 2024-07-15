import { AuthLayoutWrapper } from "@/components/auth/AuthLayoutWrapper";
import { QueryProvider } from "../QueryProvider";
import { ChakraProvider } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayoutWrapper>
      <ChakraProvider>
        <QueryProvider>{children}</QueryProvider>
      </ChakraProvider>
    </AuthLayoutWrapper>
  );
}
