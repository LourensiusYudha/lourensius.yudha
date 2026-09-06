import type { LocalizedCopy } from "@/lib/portfolio-data";

type Props = LocalizedCopy & {
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
};

export function BilingualText({ en, id, as: Tag = "span", className }: Props) {
  return (
    <Tag className={className}>
      <span className="lang-copy lang-en">{en}</span>
      <span className="lang-copy lang-id">{id}</span>
    </Tag>
  );
}
