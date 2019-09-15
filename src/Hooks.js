import { useEffect } from 'react';

const useBackgroundChanger = (timeID, weatherID) => {
  useEffect(() => {
    const app = document.querySelector('.App');
    if (timeID === 'n' || timeID === null) {
      app.style = 'background: linear-gradient(rgb(0, 0, 0), rgb(56, 56, 56));';
    } else if (timeID === 'd') {
      if (weatherID * 1 < 4) {
        app.style =
          'background: linear-gradient(rgb(0, 68, 255), rgb(0, 195, 255));';
      } else {
        app.style.background =
          'linear-gradient(rgb(0, 40, 50), rgb(0, 60, 180))';
      }
    } else if (timeID === 'welcome') {
      app.style =
        'background: linear-gradient(rgb(10, 170, 240), rgb(255, 228, 234));';
    }
  });
};

export default useBackgroundChanger;
