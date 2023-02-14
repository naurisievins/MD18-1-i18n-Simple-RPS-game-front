import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Game from './pages/Game/Game'
import Home from './pages/Home/Home'


function App() {

  const queryClient = new QueryClient()


  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='game'>Game</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='game' element={<Game />} />
            <Route path="/*" element={<h1>Error 404 <br/> Page not found!</h1>} />
          </Routes>
        </main>
      </div>
    </QueryClientProvider>
  </BrowserRouter>
  )
}

export default App
