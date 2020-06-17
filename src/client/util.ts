import { baseIncome } from "./constants";

/**
 * Compares objects to test for equality.
 * @param objects Objects to compare.
 */
export const isEqual = (...objects: any) =>
  objects.every(
    (obj: any) => JSON.stringify(obj) === JSON.stringify(objects[0])
  );

export const round = (n: number, decimals: number) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);

/**
 * Creates an array of items.
 * @param itemCosts Array of costs for all items.
 * @param itemCounts Array of counts for all items.
 * @param itemCountSetters Array of count setters for all itmes.
 * @param buyMultiplier Buy multiplier.
 */
export const createGameItems = (
  itemCosts: number[],
  itemCounts: number[],
  itemCountSetters: any[],
  buyMultiplier: number
) => {
  const items = [];
  const baseIncomeValues = Object.values(baseIncome);

  itemCosts.forEach((cost: number, i: number) => {
    items.push({
      baseIncome: round(baseIncomeValues[i], 2),
      bonusMultiplier: 1 + Math.floor(itemCounts[i] / 10) * 0.05,
      cost: round(cost * Math.pow(1.07, itemCounts[i]) * buyMultiplier, 2),
      count: itemCounts[i],
      income: round(
        itemCounts[i] *
          baseIncomeValues[i] *
          (1 + Math.floor(itemCounts[i] / 10) * 0.05),
        2
      ),
      name: `Item ${i + 1}`,
      setCount: itemCountSetters[i],
    });
  });

  return items;
};