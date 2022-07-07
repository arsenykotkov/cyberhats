import './App.css';

// Подключаем компонент (так как мы экспортировали его по умолчанию, то { ... } не используются)
import Fact from './components/Fact';

function App() {
  return (
    <>
      {/* Используем наш компонент */}
      <Fact />
    </> 
  );
}

export default App;
