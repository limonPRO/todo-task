import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';
// import '@mantine/core/styles.css';
function MyApp({ Component, pageProps }) {
  return  <MantineProvider>
  {/* <DefaultSeo {...SEO} /> */}
  <Component {...pageProps} />
</MantineProvider>
}

export default MyApp
