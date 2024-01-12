import { useState } from "react";
import Spaces from "./pages/spaces";

function App() {
  const [count, setCount] = useState(0);

  return <Spaces />;
  // return <GroupPage />; to view GroupPage.tsx
}

export default App;
