import { ReactNode } from "react";

export default {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-6 tracking-tight text-foreground leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-lg md:text-lg leading-relaxed text-foreground/85 mb-6">
      {children}
    </p>
  ),
  a: ({ href, children }: { children: ReactNode; href: string }) => (
    <a
      href={href}
      className="text-primary underline decoration-primary/50 hover:decoration-primary transition-all duration-200 underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside text-lg md:text-lg text-foreground/80 mb-6 space-y-2 pl-5">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside text-lg md:text-lg text-foreground/80 mb-6 space-y-2 pl-5">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="pl-2 leading-relaxed text-foreground/90">{children}</li>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-primary/60 pl-5 italic text-foreground/80 my-8 text-lg md:text-xl bg-foreground/5 p-4 rounded-lg">
      {children}
    </blockquote>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-foreground/10 p-4 rounded-lg text-primary text-sm md:text-base overflow-x-auto">
      {children}
    </pre>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-foreground/10 px-2 py-1 rounded text-sm text-primary font-mono">
      {children}
    </code>
  ),
  img: (props: any) => <img className="rounded-lg my-6 shadow-md" {...props} />,
  hr: () => <hr className="border-foreground/15 my-10" />,
};
