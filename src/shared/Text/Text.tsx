import React from 'react';
import styles from './text.css';
import classNames from 'classnames';
import {EColor} from '../../const/enumColor';


type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
type TBold = 400 | 500;
interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  className?: string;
  bold?: TBold;
  marginTB?: number;
}
export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = EColor.black,
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
    bold = 400,
    marginTB,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`m${desktopSize}`]]: desktopSize },
    { [styles[`m${tabletSize}`]]: tabletSize },
    styles[color],
    styles[`bold${bold}`],
    styles[`marginTB${marginTB}`]
  );

  return <As className={classes}>{children}</As>;
}
