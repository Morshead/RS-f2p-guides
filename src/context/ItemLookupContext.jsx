import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { lookupItem } from '../data/itemLookup';

const ItemLookupContext = createContext(null);

export function ItemLookupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [initialBrowseQuery, setInitialBrowseQuery] = useState('');

  const openItem = useCallback((itemOrName) => {
    const resolved =
      typeof itemOrName === 'string' ? lookupItem(itemOrName) : itemOrName;
    if (!resolved) return;
    setSelectedItem(resolved);
    setInitialBrowseQuery('');
    setIsOpen(true);
  }, []);

  const openItemBrowser = useCallback((query = '') => {
    setSelectedItem(null);
    setInitialBrowseQuery(query);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <ItemLookupContext.Provider
      value={{
        isOpen,
        selectedItem,
        initialBrowseQuery,
        openItem,
        openItemBrowser,
        setSelectedItem,
        closeModal
      }}
    >
      {children}
    </ItemLookupContext.Provider>
  );
}

export function useItemLookup() {
  const ctx = useContext(ItemLookupContext);
  if (!ctx) {
    throw new Error('useItemLookup must be used within an ItemLookupProvider');
  }
  return ctx;
}
