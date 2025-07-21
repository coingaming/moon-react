import React from "react";
import clsx from "clsx";

type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
};

type BadgeWrapperProps = {
  children: React.ReactNode;
  badgeContent?: React.ReactNode;
  wrapperClassName?: string;
  badgeClassName?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return <span className={clsx("moon-badge", className)}>{children}</span>;
}

export function BadgeWrapper({
  children,
  badgeContent,
  wrapperClassName,
  badgeClassName,
}: BadgeWrapperProps) {
  return (
    <div className={clsx("moon-badge-wrapper", wrapperClassName)}>
      {children}
      {badgeContent !== undefined && (
        <Badge className={badgeClassName}>{badgeContent}</Badge>
      )}
    </div>
  );
}
