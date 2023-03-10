import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Game from './pages/Game/Game'
import Home from './pages/Home/Home'
import { Suspense, useEffect } from 'react'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'


function App() {

  const queryClient = new QueryClient()
  const { t } = useTranslation();
  const lang = localStorage.getItem('lang');

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang]);

  return (
    <Suspense fallback='Loading...'>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <header>
              <nav>
                <NavLink to='/'>{t('home')}</NavLink>
                <NavLink to='game'>{t('game')}</NavLink>
                <select 
                  value={lang ? lang : 'en'}
                  onChange={(event) => (
                    i18n.changeLanguage(event.target.value),
                    localStorage.setItem('lang', event.target.value)
                    )}
                  className='lang_select'
                >
                  <option value='en'>EN</option>
                  <option value='lv'>LV</option>
                  <option value='de'>DE</option>
                </select>
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
    </Suspense>
  )
}

export default App
