"use client";

import { useEffect, useState } from "react";

export function obfuscate(y: string): string {
  return btoa(y).split("").reverse().join("");
}

export function deobfuscate(x: string): string {
  return atob(x.split("").reverse().join(""));
}

const DELAY_MS = 5000;

function getStyling(className?: string, text?: string, href?: string): string {
  let extraClassNames = 'transition-[opacity,filter] duration-500';
  if (text === undefined || href === undefined) {
    extraClassNames += ' blur-sm animate-pulse';
  }
  if (className !== undefined) {
    return `${className} ${extraClassNames}`;
  } else {
    return extraClassNames;
  }
}

export default function ObfuscatedLink({ className, text, href, target, placeholder }: { className?: string, text: string, href: string, target?: string, placeholder: string }) {
  let [deobfuscatedText, setDeobfuscatedText] = useState<string | undefined>(undefined);
  let [deobfuscatedHref, setDeobfuscatedHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    setDeobfuscatedText(undefined);
    const timeoutId = setTimeout(() => {
      setDeobfuscatedText(deobfuscate(text));
    }, DELAY_MS);
    return () => clearTimeout(timeoutId);
  }, [text]);

  useEffect(() => {
    setDeobfuscatedHref(undefined);
    const timeoutId = setTimeout(() => {
      setDeobfuscatedHref(deobfuscate(href));
    }, DELAY_MS);
    return () => clearTimeout(timeoutId);
  }, [href]);

  return (
    <a href={deobfuscatedHref} className={getStyling(className, deobfuscatedText, deobfuscatedHref)} target={target}>{deobfuscatedText ?? placeholder}</a>
  );
}
