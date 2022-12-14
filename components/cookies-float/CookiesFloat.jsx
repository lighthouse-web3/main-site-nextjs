import React, { useEffect } from "react";
import { useState } from "react";
import Styles from "./CookiesFloat.module.scss";

function CookiesFloat() {
  const [showCard, setShowCard] = useState(true);
  useEffect(() => {
    let cookieAccepted = localStorage.getItem("cookieAccepted");
    cookieAccepted && setShowCard(false);
  }, []);

  return (
    showCard && (
      <div className={Styles.CookieFloat}>
        <div className={Styles.title}>
          <p>Cookie and Privacy</p>
        </div>
        <p className={Styles.content}>
          We use cookies to personalize your experience. By continuing to visit
          this website you agree to our use of cookies.
        </p>
        <div
          className={Styles.button}
          onClick={() => {
            setShowCard(false);
            localStorage.setItem("cookieAccepted", true);
          }}
        >
          Got it
        </div>
      </div>
    )
  );
}

export default CookiesFloat;
