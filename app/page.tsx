"use client";

import { PreloadPage } from "@/app/pages/preload-page";
import { useTgDataStore } from "@/app/stores/tg-data-store/tg-data.store";
import { useUserStore } from "@/app/stores/user-store/user.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [setIsLoad, isLoad] = useUserStore((state: any) => [state.setIsLoad, state.isLoad]);
  const [userId, tg] = useTgDataStore((state: any) => [state.userId, state.tg]);
  
  const { push } = useRouter();
  
  useEffect(() => {
    if (tg) {
      setTimeout(() => {
        setIsLoad(true);
        push('/onboard');
      }, 3000);
    }
  }, [tg]);

  return (
    <PreloadPage />
  );
}
