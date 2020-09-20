import React from 'react';
import Chart1 from './LineChart';
import Chart2 from './BarChart';
import Chart3 from './PieChart';
import Chart4 from './AreaChart';


const Dashboard = () => {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Chart1 />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Chart2 />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Chart3  />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Chart4 />
          </div>
          <div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
