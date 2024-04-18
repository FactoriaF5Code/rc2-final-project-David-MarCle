
import "./App.css";
import { AppRouter } from './middleware/router/AppRouter';
import { MovieProvider } from '../src/middleware/context/MovieContext'; 



function App() {
 

  return (
    <>
    <MovieProvider>
    <AppRouter />
    </MovieProvider>
   
    </>
     
       
  )
}

export default App
