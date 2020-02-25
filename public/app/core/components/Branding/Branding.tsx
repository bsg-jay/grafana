import React, { FC } from 'react';
import { css, cx } from 'emotion';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  const maxSize = css`
    // max-width: 150px;
  `;

  return (
    <>
      <img className={cx(className, maxSize)} src="public/img/bsg_logo.png" alt="BSG Partners" />
      {/* <div className="logo-wordmark" /> */}
    </>
  );
};

export const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const background = css`
    // background: url(public/img/heatmap_bg_test.svg);
    background: #f7f8fa;
    background-size: cover;
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

export const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/bsg_favicon.png" alt="Grafana" />;
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
}
