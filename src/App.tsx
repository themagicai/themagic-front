import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.App}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
