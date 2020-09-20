import React from 'react';


const Report = ({ reportData }) => {
  const data = [];
  const population = [];
  reportData.data2.map(item => data.push(item.total));
  reportData.data2.map(item => population.push(item.meta.population));
  for (let i = 0; i < data.length; i++) {
    data[i].name = reportData.data1[i];
    data[i].population = population[i];
  }
  console.log(reportData.data1);

  return (
    <div className="container">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button class="dropdown-item" href="#">Action</button>
          <button class="dropdown-item" href="#">Another action</button>
          <button class="dropdown-item" href="#">Something else here</button>
        </div>
      </div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">Population</th>
            <th scope="col">Confirmed Cases</th>
            <th scope="col">Active Cases</th>
            <th scope="col">Deceased</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.name}</th>
                  <td>{item.population}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.deceased}</td>
                  <td>{item.recovered}</td>
                </tr>)
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Report;