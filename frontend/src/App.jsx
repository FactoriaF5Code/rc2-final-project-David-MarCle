import "./App.css";
import {AppRouter} from './middleware/router/AppRouter';
import {MovieProvider} from './middleware/context/MovieContext.jsx';


function App() {

    return (
        <>
            <MovieProvider>
                <AppRouter/>
            </MovieProvider>
        </>
    )
}

export default App
