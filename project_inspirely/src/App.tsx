import { useState } from "react";
import Spaces from "./pages/spaces";
import GroupPage from "./components/spaces/GroupPage";

function App() {
  const [count, setCount] = useState(0);

  // return <Spaces />;
  return <GroupPage />; //to view GroupPage.tsx
}

export default App;
