import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";

export function useHomeController() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  const matches = useMediaQuery("(min-width: 540px)");

  useEffect(() => {
    setIsDesktop(matches);
  }, [matches]);

  return {
    viewState: {
      isDesktop,
    },
  };
}
