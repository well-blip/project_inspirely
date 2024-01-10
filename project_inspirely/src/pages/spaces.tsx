import Body from "../components/spaces/body.tsx"
import Sidebar from "../components/spaces/sidebar.tsx"


const Spaces: React.FC = () => {
  return (
    <div className="container">
        <Sidebar />
        <Body />
      </div>
  );
};

export default Spaces;
