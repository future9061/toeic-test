import React, { useEffect, useState } from 'react';
import { PWAInstallPromptCSS } from '../../style/components/pwaPrompt/PWAinstallPromptCSS';
import Mascort from '../common/Mascort';

interface PropsIOS {
  isIOSShow?: boolean;
  setIsIOSShow?: React.Dispatch<React.SetStateAction<boolean>>;
}

function PWAinstallPrompt({ isIOSShow, setIsIOSShow }: PropsIOS) {
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
          console.log('앱 설치 승인');
        } else {
          console.log('앱 설치 거절');
        }

        setDefferedPrompt(null);
      });
    }
  };

  const contentAndroid = (
    <PWAInstallPromptCSS>
      <div className="bg">
        <Mascort />
        <section>
          <p>
            <span>TOEIC</span>은 앱에서 원할하게 사용할 수 있어요.
          </p>
          <strong>앱을 설치하시겠습니까?</strong>
          <div className="btn-wrap">
            <button onClick={handleInstallClick}>앱 다운 받기</button>
            <button
              onClick={() => {
                setDefferedPrompt(null);
              }}
            >
              괜찮아요 :)
            </button>
          </div>
        </section>
      </div>
    </PWAInstallPromptCSS>
  );

  const contentIOS = (
    <PWAInstallPromptCSS>
      <div className="bg">
        <Mascort />
        <section>
          <p>
            <span>TOEIC</span>은 앱에서 원할하게 사용할 수 있어요.
          </p>
          <strong>IOS 사용자 앱 설치 방법 안내</strong>
        </section>
        <section className="img-wrap">
          <img
            src={`${process.env.PUBLIC_URL}/img/pwa-ios1.png`}
            alt="ios 앱 설치"
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/pwa-ios2.png`}
            alt="ios 앱 설치"
          />
          <div className="btn-wrap">
            <button
              onClick={() => {
                setIsIOSShow?.(false);
              }}
            >
              확인했어요 :)
            </button>
          </div>
        </section>
      </div>
    </PWAInstallPromptCSS>
  );

  if (!isIOS && !isShown) {
    return null;
  }

  return (
    <>
      {(defferedPrompt && !isIOS && contentAndroid) ||
        (isIOS && isIOSShow && contentIOS)}
    </>
  );
}

export default PWAinstallPrompt;
