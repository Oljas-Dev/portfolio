import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { ToggleProvider } from "./contexts/BlogContext";
import GlobalStyles from "./styles/GlobalStyles";
import Applayout from "./ui/Applayout";
import Header from "./ui/Header";
import Options from "./pages/Options";
import Samples from "./pages/Samples";
import { DesignElementsProvider } from "./contexts/DesElContext";
import Modal from "./ui/Modal";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Articles from "./pages/Articles";
import DevArticle from "./pages/DevArticle";
import Loaders from "./ui/Loaders";
import NoPage from "./ui/NoPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <GlobalStyles />
        <ToggleProvider>
          <DesignElementsProvider>
            <Routes>
              <Route path="/" element={<Applayout />}>
                <Route index element={<Navigate replace to="/home" />} />
                <Route
                  path="home"
                  element={
                    <>
                      <Header />
                      <Modal>
                        <Modal.Main />
                      </Modal>
                    </>
                  }
                />
                <Route path="/options" element={<Options />} />
                <Route path="/options/development" element={<Samples />} />
                <Route path="/options/skills" element={<Skills />} />
                <Route path="/options/contacts" element={<Contacts />} />
                <Route path="/options/articles" element={<Articles />} />
                <Route path="/loaders" element={<Loaders />} />
                <Route
                  path="/options/development/:articleId"
                  element={
                    <DevArticle>
                      <DevArticle.Development link="/options/development" />
                    </DevArticle>
                  }
                />
                <Route
                  path="/options/articles/:articleId"
                  element={
                    <DevArticle>
                      <DevArticle.Library link="/options/articles" />
                    </DevArticle>
                  }
                />
              </Route>
              <Route path="*" element={<NoPage />} />
            </Routes>
          </DesignElementsProvider>
        </ToggleProvider>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 8000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-formsBack)",
              color: "var(--color-mtext)",
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
