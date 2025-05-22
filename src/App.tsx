
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import Index from "./pages/Index";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Tags from "./pages/Tags";
import TagDetail from "./pages/TagDetail";
import About from "./pages/About";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:slug" element={<PostDetail />} />
            <Route path="tags" element={<Tags />} />
            <Route path="tags/:tag" element={<TagDetail />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
