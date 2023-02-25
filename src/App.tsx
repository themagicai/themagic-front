import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}

export default App;
