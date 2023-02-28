import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import PlayerSection from "./components/PlayerSection";
import Header from "./components/Header";
import { RecoilRoot } from "recoil";

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      // handle FCP results
      break;
    case "LCP":
      // handle LCP results
      break;
    case "CLS":
      // handle CLS results
      break;
    case "FID":
      // handle FID results
      break;
    case "TTFB":
      // handle TTFB results
      break;
    case "INP":
      // handle INP results (note: INP is still an experimental metric)
      break;
    default:
      break;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <RecoilRoot>
          <Component {...pageProps} />
          <Header />
          <PlayerSection />
        </RecoilRoot>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
