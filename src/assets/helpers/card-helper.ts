import {number} from "card-validator";

export const formatCardNumber = (str: string, pattern: number[] | undefined) => {
  const numbers = str.match(/\d/g)?.join('')
  if (!numbers || numbers.length < 2 ) {
    return numbers
  }
  if (!pattern || pattern.length < 1) {
    return str.trim()
  }
  const arrayFromString = numbers.split('');
  pattern.sort((a, b) => b - a).forEach(index => {
    if (index <= str.length) {
      arrayFromString.splice(index, 0, ' '); // Вставляем пробел перед элементом
    }
  });
  return arrayFromString.join('').trim();
}
export const formatExpiry = (str: string) => {
  const numbers = str.match(/\d/g)?.join('')
  if (!numbers || numbers.length < 1) return ''
  if (numbers.length === 1 && +numbers > 1) {
    return '0' + numbers
  }
  if (numbers.length === 2 && +numbers > 12) return '12'
  if (numbers.length === 2 && +numbers < 1) return '01'
  if (numbers.length > 2) {
    return numbers.slice(0,2) + '/' + numbers.slice(2, 4)
  }
  return numbers
}
export const editName = (str: string) => str.toUpperCase()
export const editCardNumber = (str: string) => {
  const numbers = str.match(/\d/g)?.join('')
  if(!numbers) return ''
  const lengthNumbers = number(numbers).card?.lengths
  return lengthNumbers ?
    formatCardNumber(numbers.slice(0, lengthNumbers[lengthNumbers?.length - 1]), number(numbers).card?.gaps) :
    numbers
}
export const editCvv = (str: string) => {
  const numbers = str.match(/\d/g)?.join('')
  return numbers ? numbers.slice(0,3) : ''
}