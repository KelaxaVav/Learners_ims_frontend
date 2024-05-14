import { useEffect } from "react";

const useStylesheet = (url) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [url]);
};

export default useStylesheet;
