import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://young-oasis-76916.herokuapp.com/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
