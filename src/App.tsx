import '@mantine/core/styles.css';
import './App.css'
import { createTheme, MantineProvider } from '@mantine/core';
import HomePage from './components/HomePage';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const theme = createTheme({
  breakpoints: {
    'xs': '320px',
    'sm': '420px',
    'md': '640px',
    'lg': '768px',
    'xl': '900px',
    '2xl': '1280px'
  },
});

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
      <MantineProvider theme={theme}>
        <HomePage />
      </MantineProvider>
  );
}

export default App;
