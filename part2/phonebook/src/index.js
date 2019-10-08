import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import './index.css'


axios.get('http://localhost:3001/persons').then(response => {
  const data = response.data
  ReactDOM.render(
    <App data={data} />,
    document.getElementById('root')
  )
})

