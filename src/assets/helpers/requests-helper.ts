import type {IItemDate, IPerson} from "@/assets/helpers/types";

// Перебор массива с ответом в глубину для получения всех персон
export const getPerson = (arr: IItemDate[]) => {
  const persons: IPerson[] = []
  arr.forEach((el) => {
    if ("content" in el && el?.content) {
      const deppPerson = getPerson(el.content)
      deppPerson.forEach(item => {
        if (!persons.some((el) => el.id === item.id))
          persons.push(item)
      })
    }
    if (el.type === 'person') {
      persons.push(<IPerson>el)
    }
  })
  return persons
}