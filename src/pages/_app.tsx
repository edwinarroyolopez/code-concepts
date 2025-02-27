import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const Noop: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LanguageProvider>
  );
}