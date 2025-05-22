import { useEffect } from 'react';

function Music() {
  useEffect(() => {
    const audio = new Audio('/CMSN.mp3');
    audio.volume = 0.5;
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch((e) => {
        console.log('Không thể phát nhạc:', e);
      });
    };

    // Phát nhạc khi người dùng tương tác đầu tiên
    window.addEventListener('click', playAudio, { once: true });

    return () => {
      window.removeEventListener('click', playAudio);
      audio.pause(); // Dừng nhạc khi component bị unmount
    };
  }, []);

  return null; // Component không render gì lên giao diện
}

export default Music;
