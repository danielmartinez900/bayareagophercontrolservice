import MainLayout from "../src/components/layout/main-layout";
import "../app/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
