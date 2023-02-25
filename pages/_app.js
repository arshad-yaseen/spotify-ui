import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import PlayerSection from "./components/PlayerSection";

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
        <Component {...pageProps} />
        <PlayerSection />
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
