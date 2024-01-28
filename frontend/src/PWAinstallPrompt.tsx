import React, { useEffect, useState } from 'react';

function PWAinstallPrompt() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [defferedPrompt, setDefferedPrompt] = useState<any>(null);

  useEffect(() => {
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
  };

  const handleInstallClick = () => {
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

  return (
    <>
      {defferedPrompt && (
        <button onClick={handleInstallClick}>앱 다운 받기 ↓</button>
      )}
    </>
  );
}

export default PWAinstallPrompt;
