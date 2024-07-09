import { MouseEventHandler, TouchEventHandler, useEffect, useState } from "react";
import { BottomSheetProps } from "./types";
import { MousewheelEvents } from "swiper/types";

export const BottomSheet: React.FC<BottomSheetProps> = ({children}) => {
  const [defaultHeight, setDefaultHeight] = useState(0);
  const [sheetHeight, setSheetHeight] = useState(defaultHeight);
  const dragStart = (e: any) => {
    const startY = e.clientY;
    let newHeight: number;

    const dragMove = (e: any) => {
      e.preventDefault();
      const delta = startY - e.clientY;
      newHeight = sheetHeight + delta / window.innerHeight * 600;
      if (newHeight > defaultHeight && newHeight < window.innerHeight / 100 * 85) {
        setSheetHeight(newHeight);
      }
    }

    const dragEnd = () => {
      document.onpointermove = null;
      document.onpointerup = null;
      if (newHeight > sheetHeight) {
        if (newHeight < window.innerHeight / 100 * 36) {
          setSheetHeight(defaultHeight);
        }
        else {
          setSheetHeight(window.innerHeight / 100 * 85)
        }
      }
      else if (newHeight < sheetHeight) {
        if (newHeight > window.innerHeight / 100 * 82) {
          setSheetHeight(window.innerHeight / 100 * 85);
        }
        else {
          setSheetHeight(defaultHeight)
        }
      }
    }

    document.onpointermove = dragMove;
    document.onpointerup = dragEnd;
  }

  useEffect(() => {
    setDefaultHeight(window.innerHeight / 100 * 33);
    setSheetHeight(window.innerHeight / 100 * 33);
  }, [])

  return (
    <div className="bg-white h-1/3 rounded-t-[16px] shadow-[0_-4px_4px_0_rgba(0,0,0,0.25)] transition-all left-0 fixed w-full bottom-0" style={{height: sheetHeight}}>
      <div onMouseDown={dragStart} className="h-[18px] touch-none w-full flex justify-center items-center">
        <span className="w-[36px] touch-none block h-[4px] bg-[#1A1A1A] rounded-[4px]"></span>
      </div>
      {children}
    </div>
  )
}