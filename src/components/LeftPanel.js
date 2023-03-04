import { Outlet } from "react-router-dom";

function LeftPanel(props) {
  return (
    <div className="col-sm-3">
     <div className="list-group">
        {props.children}
        </div>
      <Outlet />
    </div>
  );
}
export default LeftPanel;
