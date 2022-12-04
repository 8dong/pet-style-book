import type { NextApiHandler } from 'next';

import styleItems from '../../data/styleItems';

const fetchShopItems: NextApiHandler = async (req, res) => {
  const fetchStartIndex = req.body.fetchStartIndex;
  let fetchEndIndex = fetchStartIndex + req.body.fetchLength;

  if (req.body.fetchLength === undefined) {
    const fetchedStyleItems = styleItems.slice();

    res.status(200).json({ fetchedStyleItems, fetchedDone: true });
    return;
  }

  if (fetchEndIndex >= styleItems.length) {
    fetchEndIndex = styleItems.length;
    const fetchedStyleItems = styleItems.slice(fetchStartIndex, fetchEndIndex);

    res.status(200).json({ fetchedStyleItems, fetchedDone: true });
  } else {
    const fetchedStyleItems = styleItems.slice(fetchStartIndex, fetchEndIndex);

    res.status(200).json({ fetchedStyleItems, fetchedDone: false });
  }
};

export default fetchShopItems;
