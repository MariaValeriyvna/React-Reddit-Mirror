import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import { EColor } from '../../const/enumColor';
import { EIcon } from '../../const/enumIcon';

type TSizes = 50 | 30 | 28 | 20 | 16 | 14 | 12 | 10;
interface IIconProps {
  As?: 'div' | 'button' ;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  className?: string;
  icon: EIcon;
}
export function Icon(props: IIconProps) {
  const {
    As = 'button',
    color = EColor.black,
    icon = EIcon.save,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`m${desktopSize}`]]: desktopSize },
    { [styles[`m${tabletSize}`]]: tabletSize },
    styles[color],
    styles[icon]
  );
  return <As className={classes} />;
}
