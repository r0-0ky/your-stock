"use client";

import { Preload } from "@/shared/ui/preload";
import { useTgDataStore } from "@/app/stores/tg-data-store/tg-data.store";
import { useUserStore } from "@/app/stores/user-store/user.store";
import { useEffect } from "react";
import { OnboardPage } from "@/pages/onboard-page";
import { MapPage } from "@/pages/map-page";

export const AppRouter: React.FC = () => {
  const [setIsLoad, isFirstLogin] = useUserStore((state: any) => [state.setIsLoad, state.isFirstLogin]);
  const [tg] = useTgDataStore((state: any) => [state.tg]);

  useEffect(() => {
    if (tg) {
      setTimeout(() => {
        setIsLoad(true);
      }, 3000);
    }
  }, [tg]);

  return (
    <>
      <Preload />
      {isFirstLogin ?
        <OnboardPage />
      :
        <MapPage />
      }
    </>
  );
}