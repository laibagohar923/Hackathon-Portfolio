'use client';

import { useState } from 'react';
const useMenuNav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {

    if (isMenuOpen)
      setIsMenuOpen(false);
    else
      setIsMenuOpen(true);

  }
  return {
    isMenuOpen,
    toggleMenu,
  }
}

export default useMenuNav;