import sortByHealth from '../index';

describe('sortByHealth', () => {
  test('возвращает героев в порядке убывания здоровья', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const result = sortByHealth(heroes);

    expect(result).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('два героя с одним уровнем здоровья', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 10 },
      { name: 'лучник', health: 80 },
    ];

    const result = sortByHealth(heroes);

    expect(result).toEqual([
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 10 },
    ]);
  });

  test('два героя', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'лучник', health: 9 },
    ];

    const result = sortByHealth(heroes);

    expect(result).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'лучник', health: 9 },
    ]);
  });
});
