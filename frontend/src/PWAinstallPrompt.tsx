import React, { useEffect, useState } from 'react';
import { PWAInstallPromptCSS } from './style/PWAinstallPromptCSS';
import Mascort from './components/common/Mascort';

function PWAinstallPrompt() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [defferedPrompt, setDefferedPrompt] = useState<any>(null);

  const [isShown, setIsShown] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isDeviceIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
    setIsIOS(isDeviceIOS);

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleBeforeInstallPrompt = (e: Event) => {
    e.preventDefault();
    setDefferedPrompt(e);
    setIsShown(true);
  };

  const handleInstallClick = () => {
    setIsShown(false);

    if (defferedPrompt) {
      defferedPrompt.prompt();

      defferedPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          alert('앱 설치가 완료되었습니다.');
        } else {
          alert('앱 설치를 거절하였습니다.');
        }

        setDefferedPrompt(null);
      });
    }
  };

  const content = (
    <PWAInstallPromptCSS>
      <Mascort />
      <p>
        <span>TOEIC</span>은 앱에서 원할하게 사용할 수 있어요.
      </p>
      <strong>앱을 설치하시겠습니까?</strong>
      <div>
        <button onClick={handleInstallClick}>앱 다운 받기 ↓</button>
        <button onClick={() => setDefferedPrompt(null)}>괜찮아요 :)</button>
      </div>
    </PWAInstallPromptCSS>
  );

  if (!isIOS && !isShown) {
    return null;
  }

  return <>{defferedPrompt && content}</>;
}

export default PWAinstallPrompt;
