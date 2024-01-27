// import { useState } from "react";
import {Route ,Routes} from "react-router-dom";
import Spaces from "./pages/spaces";

import GroupPage from "./components/spaces/GroupPage";


function App() {
  // const [count, setCount] = useState(0);
  // <Routes>
  //   <Route index element = {<Spaces/>}/>
  //   <Route path="/spaces" element={<Spaces/>}/>
  //   <Route path="/group" element={<GroupPage/>}/>
  // </Routes>

  return <Spaces />;
  // return <GroupPage />; 
}

export default App;
