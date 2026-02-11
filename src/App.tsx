// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Toaster } from 'react-hot-toast'
import "./App.css";
import Modal from "./components/ui/ReactModal";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const [count, setCount] = useState(0)
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
