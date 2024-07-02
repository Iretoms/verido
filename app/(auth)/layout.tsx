import { AuthLayoutWrapper } from "@/components/auth/AuthLayoutWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayoutWrapper>{children}</AuthLayoutWrapper>
  );
}
