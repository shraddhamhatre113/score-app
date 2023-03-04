import { useState } from "react";
import InfoTab from "./InfoTab";
import LineupTab from "./LineupTab";
import StatsTab from "./StatsTab";
import SummaryTab from "./SummaryTab";
import TableTab from "./TableTab";

function TabPanel(props) {
  const [activeTab, setActiveTab] = useState("tab-1");
  const selectTab = (e) => {
    setActiveTab(e.target.dataset.id);
  };
  const details = props.fixture;
  return (
    <div>
      <ul
        id="matchTabs"
        className="nav nav-tabs border rounded-top d-lg-flex "
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "tab-1" ? "nav-link active" : "nav-link"}
            role="tab"
            data-bs-toggle="tab"
            data-id="tab-1"
            href="tab-1"
            onClick={selectTab}
          >
            Info
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "tab-2" ? "nav-link active" : "nav-link"}
            role="tab"
            data-bs-toggle="tab"
            href="tab-2"
            data-id="tab-2"
            onClick={selectTab}
          >
            Summary
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "tab-3" ? "nav-link active" : "nav-link"}
            role="tab"
            data-bs-toggle="tab"
            href="tab-3"
            data-id="tab-3"
            onClick={selectTab}
          >
            Statistics
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "tab-4" ? "nav-link active" : "nav-link"}
            role="tab"
            data-bs-toggle="tab"
            href="tab-4"
            data-id="tab-4"
            onClick={selectTab}
          >
            Line-ups
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "tab-5" ? "nav-link active" : "nav-link"}
            role="tab"
            data-bs-toggle="tab"
            href="tab-5"
            data-id="tab-5"
            onClick={selectTab}
          >
            Table
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          id="tab-1"
          className={`${
            activeTab === "tab-1" ? "tab-pane active" : "tab-pane"
          }`}
        >
          <InfoTab fixture={details.fixture}></InfoTab>
        </div>
        <div
          id="tab-2"
          className={`${
            activeTab === "tab-2" ? "tab-pane active" : "tab-pane"
          }`}
        >
          <SummaryTab events={details.events} home={details.teams.home.name} away={details.teams.away.name}></SummaryTab>
        </div>
        <div
          id="tab-3"
          className={`${
            activeTab === "tab-3" ? "tab-pane active" : "tab-pane"
          }`}
        >
          <StatsTab statistics = {details.statistics}></StatsTab>
        </div>
        <div
          id="tab-4"
          className={`${
            activeTab === "tab-4" ? "tab-pane active" : "tab-pane"
          }`}
        >
          <LineupTab lineups={details.lineups}></LineupTab>
        </div>
        <div
          id="tab-5"
          className={`${
            activeTab === "tab-5" ? "tab-pane active" : "tab-pane"
          }`}
        >
          <TableTab></TableTab>
        </div>
      </div>
    </div>
  );
}
export default TabPanel;
