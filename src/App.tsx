import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import EditForm from "./components/EditForm";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../src/components/errorFallback/ErrorFallback";

import "./App.css";
const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="edit/:id" element={<EditForm />}></Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
