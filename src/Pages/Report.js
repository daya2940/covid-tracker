import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Report = ({ reportData }) => {
  const data = [];
  const [name, setName] = useState('AN');
  const [filter,setFilter] = useState([])

  const population = [];
  reportData.data2.map(item => data.push(item.total));
  reportData.data2.map(item => population.push(item.meta.population));
  for (let i = 0; i < data.length; i++) {
    data[i].name = reportData.data1[i];
    data[i].population = population[i];
  }

  const handleChange = e => {
    setName(e.value);
    filterDropDown();
  }

  const defaultOption = reportData.data1[0];

  const filterDropDown = () => {
    const filteredData = data.filter(stateName => {
      if (stateName.name === name)
        return stateName;
    });
    setFilter(filteredData);
  }



  console.log(filter);

  return (
    <div className="container">
      <div className="mt-3 ml-auto" style={{ width: '30%' }}>
        Filter<Dropdown options={reportData.data1} onChange={handleChange} value={name} placeholder="Select a state" />;
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
          { filter.length===0 &&
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
          {
            filter.map((item, index) => {
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