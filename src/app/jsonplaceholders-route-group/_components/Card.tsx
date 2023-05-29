import cx from 'classnames';
import { HTMLAttributes } from "react";

type CardProps = {
  children: React.ReactNode,
  title?: string | React.ReactNode,
  className?: HTMLAttributes<HTMLElement>['className'],
};

export const Card = ({ children, title, className }: CardProps) => {
  return (
    <div className={cx("px-6 py-6 bg-zinc-800 rounded-xl", className)}>
      {title && <p className="mb-6 font-semibold text-xl">{title}</p>}
      {children}
    </div>
  );
};