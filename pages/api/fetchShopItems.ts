import type { NextApiHandler } from 'next';

import shopItems from '../../data/shopItems';

const fetchShopItems: NextApiHandler = async (req, res) => {
  const fetchStartIndex = req.body.fetchStartIndex;
  let fetchEndIndex = fetchStartIndex + req.body.fetchLength;

  if (req.body.fetchLength === undefined) {
    const fetchedShopItems = shopItems.slice();

    res.status(200).json({ fetchedShopItems, fetchedDone: true });
    return;
  }

  if (fetchEndIndex >= shopItems.length) {
    fetchEndIndex = shopItems.length;
    const fetchedShopItems = shopItems.slice(fetchStartIndex, fetchEndIndex);

    res.status(200).json({ fetchedShopItems, fetchedDone: true });
  } else {
    const fetchedShopItems = shopItems.slice(fetchStartIndex, fetchEndIndex);

    res.status(200).json({ fetchedShopItems, fetchedDone: false });
  }
};

export default fetchShopItems;
