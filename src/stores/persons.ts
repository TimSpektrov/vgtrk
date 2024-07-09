import {defineStore} from "pinia"
import { ref} from "vue"
import axios from "axios"
import {ALL_PERSONS, API_URL, PERSON, PICTURE, PICTURE2} from "@/assets/helpers/personApi";
import {getPerson} from "@/assets/helpers/requests-helper";
import type {IPerson} from "@/assets/helpers/types";

export const usePersonsStore = defineStore('persons', () => {
  const persons = ref<IPerson[]>([])
  const currentPerson = ref<IPerson | null>(null)
  const isLoading = ref(false)
  const fetchData = async () => {
    if (!persons.value.length) {
      isLoading.value = true
      try {
        axios
          .get(API_URL + ALL_PERSONS)
          .then((response) => {
            persons.value = getPerson(response.data.data.content)
          })
      } catch (err) {
        console.log('Ошибка загрузки данных', err)
      } finally {
        isLoading.value = false
      }
    }
  }

  const fetchPerson = async (id: number) => {
    isLoading.value = true
    try {
      axios
        .get(`${API_URL}${PERSON}${id}`)
        .then((response) => {
          currentPerson.value = response.data.data
        })
    } catch (err) {
      console.log('Ошибка загрузки данных', err)
    } finally {
      isLoading.value = false
    }
  }

  return {persons, currentPerson, isLoading, fetchData, fetchPerson }
})