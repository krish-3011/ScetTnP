import React, { useEffect } from "react";
import "./style.css";
import "./header.css";
import "./button.css";
import "./graph.css";
import GaugeComponent from "./GaugeComponent";
import AcademicYearDropdown from "./DropDownComponent";
import DepartmentDropdown from "./DropDownComponentDept";
import ReactDOM from "react-dom";
import ApexChart from "./BarGraphComponent";
import BarChartComponent from "./VBarGraph";

let data;
const GetData = async () => {
  try {
    data = await fetch("192.168.156.253:8080/home");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const Graphs = () => (
  <div className="Stats">
    <div className="graph-1">
      <GaugeComponent id="1" value={200} />
      <GaugeComponent id="2" value={300} />
      <div className="drop-down-pie">
        <div className="drop-down-menu">
          <AcademicYearDropdown></AcademicYearDropdown>
        </div>
        <div className="drop-down-menu-2">
          <DepartmentDropdown />
        </div>
        <div className="pie-container">
          <div className="piechart">
            <div className="_65">65%</div>
            <div className="placement">placement</div>
          </div>
        </div>
      </div>
    </div>
    <div className="Graph2">
      <h2 className="high-pkg-text">HIGHEST PACKAGE</h2>
      <div className="BAR-GRAPH">
        <ApexChart
          id="1"
          data={[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]}
        />
      </div>
    </div>
    <div className="Graph3">
    <h2 className="avg-pkg-text">AVERAGE PACKAGE</h2>
      <div className="BAR-GRAPH2">
        <ApexChart
          id="2"
          data={[320, 400, 450, 520, 600, 650, 700, 800, 900, 1000]}
        />
      </div>
    </div>
    <div className="Graph4">
      <div className="BarContainer">
        <BarChartComponent />
      
      
      </div>
        
      
    </div>

  </div>
);
export default Graphs;
