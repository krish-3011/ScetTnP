import React, { useEffect } from 'react';
import { Gauge } from 'gaugeJS';
import './graph.css';

const GaugeComponent = ({ id, value }) => {
  useEffect(() => {
    const opts = {
      angle: -0.06,
      lineWidth: 0.06,
      radiusScale: 0.65,
      pointer: {
        length: 0.5,
        strokeWidth: 0.035,
        color: '#000000'
      },
      limitMax: false,
      limitMin: false,
      colorStart: '#6FADCF',
      colorStop: '#8FC0DA',
      strokeColor: '#E0E0E0',
      generateGradient: true,
      highDpiSupport: true,
      staticZones: [
        { strokeStyle: "#6976CB", min: 0, max: 250 },
        { strokeStyle: "#F2F3F6", min: 250, max: 320 }
      ]
    };

    const target = document.getElementById(id);
    const gauge = new Gauge(target).setOptions(opts);
    gauge.maxValue = 320;
    gauge.setMinValue(0);
    gauge.animationSpeed = 60;
    gauge.set(value);
  }, [id, value]);

  return (
    <div id={`gauge-container`}>
    <div id={`container-${id}`}>
      <canvas id={id}></canvas>
      <div className="gauge-label label-left">0</div>
      <div className="gauge-label label-right">320</div>
      <div className="gauge-label label-middle">total</div>
      <p  className=" students-interested">students interested</p>
    </div>
    </div>
  );
};

export default GaugeComponent;
