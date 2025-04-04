import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css';
import './components/header.tsx';
import App from './App.tsx';
import Header from './components/header.tsx';
import Projects from './components/projects.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Projects/>
    <App />

  </StrictMode>,
)