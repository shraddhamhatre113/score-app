import { Outlet } from "react-router-dom";

function LeftPanel(props) {
  return (
    <div style={{ border: "2px solid",color:'white' }}>
      <ul style={{ listStyleType: "none" }}>
        {props.children}
      </ul>
      <Outlet />
    </div>
  );
}
export default LeftPanel;
