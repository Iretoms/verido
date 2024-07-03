import { AuthLayoutWrapper } from "@/components/auth/AuthLayoutWrapper";
import { QueryProvider } from "../QueryProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayoutWrapper>
      <QueryProvider>{children}</QueryProvider>
    </AuthLayoutWrapper>
  );
}
