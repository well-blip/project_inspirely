import { useState } from "react";
import Spaces from "./pages/spaces";
import GroupPage from "./components/spaces/GroupPage";

function App() {
  const [count, setCount] = useState(0);

  return <Spaces />;
   //to view GroupPage.tsxreturn <GroupPage />;
}

export default App;
