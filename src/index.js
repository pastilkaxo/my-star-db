// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//

const getRequest = async (url) => {
    const res = await  fetch(url);
    const body = await  res.json();

    return body;
}
getRequest("https://swapi.dev/api/people/1/")
    .then((el) => {
        console.log(el);
    })
