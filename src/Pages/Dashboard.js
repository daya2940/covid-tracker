import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Dashboard =() => {


  const[data,setData] = useState([{}]);
  useEffect(() => {
    getData();
  })

  const getData = async () =>{
    const stateData  = await axios.get('https://api.covid19india.org/state_district_wise.json ');
    setData(stateData);
    console.log(data);
  }

  return (
    <div>
      {/* {JSON.stringify(data)} */}
    Dashboard
    </div>
  );
}

export default Dashboard;
