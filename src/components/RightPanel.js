import { Outlet } from "react-router-dom";

function RightPanel(props) {
  return (
    <div className="col-sm-8 col-8">
      <div className="list-group">
        {props.children}
      </div>
      <Outlet />
    </div>
  );
}
export default RightPanel;
