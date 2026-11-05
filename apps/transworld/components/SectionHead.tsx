import type { ReactNode } from 'react';

/** Section heading row: eyebrow, title and intro on the left, an optional link on the right. */
export default function SectionHead({
  eyebrow,
  title,
  intro,
  action,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="section-head">
      <div className="section-head-text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="h-1" id={id}>
          {title}
        </h2>
        {intro && <p className="intro">{intro}</p>}
      </div>
      {action && <div className="section-head-action">{action}</div>}
    </div>
  );
}
