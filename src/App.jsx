import './App.css'
import DatePicker from './components/DatePicker'

export default function App() {
  return (
    <div className="app-root">
      <h1 className="text-3xl font-bold underline">Hello, World!</h1>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Date Picker Component</h2>
        <DatePicker />
      </div>
    </div>
  )
}
