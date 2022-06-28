import logo from './logo.svg';
import './App.css';
import {fetchProviders, fetchProvider} from "./api";
import { useEffect, useState } from 'react';
import { Link, useNavigate, Route, Switch, Routes } from 'react-router-dom'
import {Profile} from './Profile'
import { Appointment } from './Appointment';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

function App() {
  // Samples of API requests
  // fetchProvider("1").then(console.log)

  const [result, setResult] = useState([])

  const fetcher = async () => {
    const res = await fetchProviders()
    console.log(res)
    setResult(res)
  }

  useEffect(() => {
    console.log("result = " + result)
    fetcher()
  }, [])

  return (
    <div className="container">
      <h2 className="mt-5 mb-5">Staffs</h2>
      <div className="row">
      {result.map((staff, i) => (
        <div className="card col-md-4" style={{width: "18rem"}} key={i}>
          <div className="card-body">
            <h5 className="card-title">{staff.name}</h5>
            <p className="card-text">
              {staff.title}
            </p>
            <Link
              to = {`/${staff.id}`}
              className="btn btn-raised btn-primary btn-sm"
              onClick= {Profile}
            >
              View Profile
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
