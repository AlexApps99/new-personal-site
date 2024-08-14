function deobfuscate(x: string): string {
  const f = new Function('y', atob("cmV0dXJuIGF0b2IoeS5zcGxpdCgiIikucmV2ZXJzZSgpLmpvaW4oIiIpKTs"));
  return f(x);
}

// TODO this provides zero protection.
// I need to find a way to do this that works in SSR.
export default function ObfuscatedLink({ className, text, href, target, placeholder }: { className?: string, text: string, href: string | ((text: string) => string), target?: string, placeholder: string }) {
  const deobfuscatedText = deobfuscate(text);
  const deobfuscatedHref = typeof href === "string" ? deobfuscate(href) : href(deobfuscatedText);

  return (
    <a href={deobfuscatedHref} className={className} target={target}>{deobfuscatedText}</a>
  );
}
