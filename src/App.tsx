import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
