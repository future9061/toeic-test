import React, { useState, useEffect } from 'react';
import { HomeCSS } from '../style/pages/HomeCSS';
import Button from '../components/common/Button';
import { FaGithub } from 'react-icons/fa';
import Logo from '../components/common/Logo';
import { motion, useTime, useTransform } from 'framer-motion';
import PWAinstallPrompt from '../PWAinstallPrompt';

function Home() {
  const time = useTime();
  const [rotationCount, setRotationCount] = useState(0);

  const animatedRotate = useTransform(
    time,
    [rotationCount * 4000, (rotationCount + 1) * 4000],
    [0, 360],
    { clamp: false },
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationCount((prevCount) => prevCount + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HomeCSS>
      <div className="banner">
        <motion.div style={{ rotate: animatedRotate }} className="rotate_box" />
        <Logo size="25em" />
      </div>
      <div className="btn_wrap">
        <Button children="로그인" id="login" bgcolor="#fff" color="#7AC3CE" />
        <Button children="회원가입" bgcolor="#7AC3CE" id="register" />
        <div className="line"></div>
        <PWAinstallPrompt />
      </div>

      <div
        className="footer"
        onClick={() => {
          window.open('https://github.com/orgs/team-toeic/repositories');
        }}
      >
        <div>
          <span>
            <FaGithub />
          </span>
        </div>
      </div>
    </HomeCSS>
  );
}
export default Home;
