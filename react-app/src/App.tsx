import './App.css'
import Placeholder from './Placeholder'

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <h1 style={{ margin: 0 }}>React Conversion Workspace</h1>
      </header>
      <Placeholder />
    </div>
  )
}
