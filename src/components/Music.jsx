import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const audio = new Audio('/CMSN.mp3');
    audio.volume = 0.5; // Giảm âm lượng xuống 50%
    audio.loop = true;
    audio.play().catch((e) => {
      console.log('Trình duyệt ngăn autoplay, sẽ phát khi có tương tác');
    });
  }, []);

  return (
    <div>
      <h1>Chào mừng!</h1>
    </div>
  );
}

export default App;
