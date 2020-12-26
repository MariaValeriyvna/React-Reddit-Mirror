import React, { useState } from 'react';
import styles from './cardmenu.css';
import { MenuIcon } from '../../../Icons';
import { DropDownMenu } from './DropDownMenu';

export function CardMenu(): JSX.Element {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [portalXY, setPortalXY] = useState({ x: 0, y: 0 });

  return (
    <div className={styles.cardmenu}>
      <button
        className={styles.cardmenuButton}
        onClick={(ev) => {
          setIsDropDownOpened(true);
          setPortalXY({ x: ev.clientX, y: ev.clientY });
        }}
      >
        <MenuIcon />
      </button>
      {isDropDownOpened && (
        <DropDownMenu
          portalTop={portalXY.y + 50}
          portalLeft={portalXY.x - 120}
          onClose={() => {
            setIsDropDownOpened(false);
          }}
        />
      )}
    </div>
  );
}
