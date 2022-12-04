import { useState, useCallback, useRef, useEffect } from 'react';

import type { ShopItemType } from '../data/shopItems';
import type { StyleItemType } from '../data/styleItems';

interface ShopItemsInfinityScroll {
  initialList: ShopItemType[];
  fetchType: 'shopItems';
  fetchUrl: string;
  fetchLength: number;
}

interface StyleItemsInfinityScroll {
  initialList: StyleItemType[];
  fetchType: 'styleItems';
  fetchUrl: string;
  fetchLength: number;
}

const useInfinityScroll = (
  infinityScrollConfig: ShopItemsInfinityScroll | StyleItemsInfinityScroll
) => {
  const { initialList, fetchType, fetchUrl, fetchLength } = infinityScrollConfig;

  const [currentList, setCurrentList] = useState(initialList);
  const [isFetchedDone, setIsFetchedDone] = useState(false);

  const fetchData = useCallback(async () => {
    const res = await fetch(fetchUrl, {
      method: 'POST',
      body: JSON.stringify({ fetchStartIndex: currentList.length, fetchLength: fetchLength }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    if (fetchType === 'shopItems') {
      const { fetchedShopItems, fetchedDone } = await res.json();

      setCurrentList((prevList) => [...prevList, ...fetchedShopItems]);
      setIsFetchedDone(fetchedDone);
    } else if (fetchType === 'styleItems') {
      const { fetchedStyleItems, fetchedDone } = await res.json();

      setCurrentList((prevList) => [...prevList, ...fetchedStyleItems]);
      setIsFetchedDone(fetchedDone);
    }
  }, [currentList, fetchUrl, fetchLength, fetchType]);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry]) => {
      if (entry.isIntersecting && !isFetchedDone) {
        fetchData();
      }
    },
    [isFetchedDone, fetchData]
  );

  const observerTargetEl = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!observerTargetEl.current) return;

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.8 });
    observer.observe(observerTargetEl.current);

    return () => observer.disconnect();
  }, [onIntersect]);

  return { currentList, isFetchedDone, observerTargetEl };
};

export default useInfinityScroll;
