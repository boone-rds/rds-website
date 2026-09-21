import { useEffect, useRef } from "react";

type TurnstileWidgetProps = {
  onToken: (token: string) => void;
};

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      theme: "light" | "dark" | "auto";
    },
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-script";
const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function TurnstileWidget({ onToken }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const renderWidget = () => {
      if (
        cancelled ||
        !containerRef.current ||
        !window.turnstile ||
        widgetIdRef.current
      ) {
        return;
      }

      const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

      if (!siteKey) {
        console.error("VITE_TURNSTILE_SITE_KEY is not configured.");
        onToken("");
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onToken,
        "expired-callback": () => onToken(""),
        "error-callback": () => onToken(""),
        theme: "light",
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      let script = document.getElementById(
        TURNSTILE_SCRIPT_ID,
      ) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = TURNSTILE_SCRIPT_ID;
        script.src = TURNSTILE_SCRIPT_URL;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      script.addEventListener("load", renderWidget);
    }

    return () => {
      cancelled = true;

      const script = document.getElementById(
        TURNSTILE_SCRIPT_ID,
      ) as HTMLScriptElement | null;

      script?.removeEventListener("load", renderWidget);

      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }

      widgetIdRef.current = null;
    };
  }, [onToken]);

  return <div className="contact-turnstile" ref={containerRef} />;
}

export default TurnstileWidget;
