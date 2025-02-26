import { ReactNode } from "react";

const TABLE_COMPONENTS = {
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto my-6 border border-foreground/15 rounded-xl">
      <table className="w-full border-collapse overflow-hidden">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-foreground/10 text-foreground/80 border-b border-foreground/15">
      {children}
    </thead>
  ),
  tbody: ({ children }: { children: ReactNode }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children: ReactNode }) => (
    <tr className="border-b border-foreground/15 hover:bg-foreground/5 transition-colors last:border-0">
      {children}
    </tr>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-4 py-2.5 text-left text-foreground/90 font-normal border first:border-l-0 last:border-r-0 border-t-0 border-foreground/15  bg-foreground/5">
      {children}
    </th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-4 py-2.5 border first:border-l-0 last:border-r-0 border-foreground/15 text-foreground/80">
      {children}
    </td>
  ),
};

export default TABLE_COMPONENTS;
