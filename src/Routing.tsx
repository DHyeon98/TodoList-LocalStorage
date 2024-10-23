import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Details from "./pages/[id]";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={() => <App />} />
        <Route path="/:id" Component={() => <Details />} />
      </Routes>
    </BrowserRouter>
  );
}
