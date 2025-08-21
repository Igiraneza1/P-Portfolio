import { useEffect } from "react";

function TidioChat() {
  useEffect(() => {
    if (!document.getElementById("tidio-script")) {
      const script = document.createElement("script");
      script.src = "//code.tidio.co/vg0triujv1gwcsepn0pts9cf4epmu0mz.js"; 
      script.async = true;
      script.id = "tidio-script";
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

export default TidioChat;
