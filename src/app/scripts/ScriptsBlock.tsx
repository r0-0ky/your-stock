"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useTgDataStore } from "../stores/tg-data-store/tg-data.store";

declare global {
  interface Window {
    Telegram?: {
      WebApp?: any;
    };
  }
}
export const ScriptsBlock = () => {
  const [setTg] = useTgDataStore((state: any) => [state.setTg]);

  const initTg = () => {
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      console.log('Telegram WebApp is set');
      const tgData = window.Telegram.WebApp
      setTg(tgData);
    } else {
      console.log('Telegram WebApp is undefined, retrying…');
      setTimeout(initTg, 500);
    }
  }

  useEffect(() => {
    console.log('useTelegram')
    initTg();
  }, []);
  
  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
    </>
  );
};
