import {editName, formatCardNumber, formatExpiry} from '@/assets/helpers/card-helper'
import {describe, it, expect} from 'vitest'

describe('Тестирование преобразования имени', () => {
  const names = [
    {
      in: 'Tim',
      out: 'TIM',
    },
    {
      in: 'ALEX',
      out: 'ALEX',
    },
    {
      in: 'jOhNy',
      out: 'JOHNY',
    },
    {
      in: '',
      out: '',
    },

  ]

  names.forEach(name => {
    it(`Преобразование ${name.in} в ${name.out}`, () => {
      expect(editName(name.in)).toBe(name.out)
    });
  })
})

describe('Тестирование формаиирования номера карты', () => {
  const cardNumbers = [
    {
      number: '5454500030009898',
      pattern: [4,8,12],
      result: '5454 5000 3000 9898',
    },
    {
      number: '5454 5000 3000 9898',
      pattern: [4,8,12],
      result: '5454 5000 3000 9898',
    },
    {
      number: '5454 5000 3000 989845',
      pattern: [4,8,12],
      result: '5454 5000 3000 989845',
    },
    {
      number: '545450003000',
      pattern: [4,8,12],
      result: '5454 5000 3000',
    },
    {
      number: '5454',
      pattern: [4,8,12],
      result: '5454',
    },
    {
      number: '123456789012',
      pattern: [2,5,10],
      result: '12 345 67890 12',
    },
  ]
  cardNumbers.forEach(card => {
    it(`Преобразование ${card.number}`, () => {
      expect(formatCardNumber(card.number, card.pattern)).toBe(card.result)
    });
  })
})

describe('Тестирование преобразования даты', () => {
  const dates = [
    {
      in: '0',
      out: '0',
    },
    {
      in: '2',
      out: '02',
    },
    {
      in: '13',
      out: '12',
    },
    {
      in: '00',
      out: '01',
    },
    {
      in: '01/10',
      out: '01/10',
    },
    {
      in: '0/10',
      out: '01/0',
    },
  ]

  dates.forEach(dateItem => {
    it(`Преобразование ${dateItem.in} в ${dateItem.out}`, () => {
      expect(formatExpiry(dateItem.in)).toBe(dateItem.out)
    });
  })
})