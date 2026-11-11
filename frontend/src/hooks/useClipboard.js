
import { useState } from "react";

export function useClipboard(timeout = 1400) {
  const [copied, setCopied] = useState(false);

  async function copy(value) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();

        const successful = document.execCommand("copy");
        document.body.removeChild(textarea);

        if (!successful) throw new Error("Copy failed");
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), timeout);
    } catch (error) {
      console.error("Clipboard error:", error);
      setCopied(false);
    }
  }

  return { copied, copy };
}
