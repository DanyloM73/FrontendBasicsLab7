import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsGallery from './components/GoodsGallery';

function App() {
  const [showSecondTask, setShowSecondTask] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => setShowSecondTask((prev) => !prev)}
      >
        {showSecondTask ? 'Перше завдання' : 'Друге завдання'}
      </button>

      {!showSecondTask && (
        <>
          <Header />
          <Content />
          <Image />
        </>
      )}

      {showSecondTask && <GoodsGallery />}
    </div>
  );
}

export default App;
