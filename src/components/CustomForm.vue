<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
          v-for="input in formList"
          :key="input.formId"
          :name="input.formId"
          :label="input.label"
          v-model="input.value"
          :placeholder="input.placeholder"
          @input="handleInput(input.formId, $event)"
          @blur="handleBlur(input)"
          :error-messages="errors[input.formId]"
          class="mb-2"
      ></v-text-field>

      <v-btn
          color="primary"
          class="mr-4"
          type="submit"
          :disabled="isButtonActive"
      >
        Отправить
      </v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import {cardholderName, expirationDate, number, cvv} from 'card-validator'
import { useFocusedStore } from '@/stores/focuses'
import {editCardNumber, editCvv, editName, formatExpiry} from "@/assets/helpers/card-helper";

interface IFormInput {
  label: string,
  formId: string,
  placeholder: string,
  value: string,
  errors: string[] | string | null,
}
interface IProps {
  [key: string]: string
}

const errors = ref<IProps>({})

const formList = ref<IFormInput[]>([
  {
    label: 'Имя',
    formId: 'name',
    placeholder: 'JOHN',
    value: '',
    errors: [],
  },
  {
    label: 'Фамилия',
    formId: 'surname',
    placeholder: 'DOE',
    value: '',
    errors: [],
  },
  {
    label: 'Номер карты',
    formId: 'cardNumber',
    placeholder: '5432 1098 7654 3210',
    value: '',
    errors: [],
  },
  {
    label: 'Срок',
    formId: 'expiry',
    placeholder: '12/30',
    value: '',
    errors: [],
  },
  {
    label: 'CVC/CVV',
    formId: 'cvv',
    placeholder: '000',
    value: '',
    errors: [],
  },
])

const isButtonActive =computed(() => {
  return Object.keys(errors.value).length > 0
})
const handleInput = (formId: string, event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement;
  let updateValue = inputElement.value;

  switch (formId) {
    case 'name':
    case 'surname':
      updateValue = editName(updateValue)
      break;
    case 'cardNumber':
      updateValue = editCardNumber(updateValue)
      break;
    case 'expiry':
      updateValue = formatExpiry(updateValue)
      break;
    case 'cvv':
      updateValue = editCvv(updateValue)
      break;
  }
  const index = formList.value.findIndex(item => item.formId === formId);
  if (index !== -1) {
    formList.value[index].value = updateValue;
  }
};

const handleBlur = (input: IFormInput) => {
  store.setFocusInputStore(null)
  switch (input.formId) {
    case 'name':
      cardholderName(input.value).isValid ? delete errors.value['name'] : errors.value['name'] = 'Неверное имя';
      break;
    case 'surname':
      cardholderName(input.value).isValid ? delete errors.value['surname'] : errors.value['surname'] = 'Неверная фамилия'
      break;
    case 'cardNumber':
      number(input.value).isValid ? delete errors.value['cardNumber'] : errors.value['cardNumber'] = 'Неверный номер карты'
      break;
    case 'expiry':
      expirationDate(input.value).isValid ? delete errors.value['expiry'] : errors.value['expiry'] = 'Неверный срок действия карты'
      break;
    case 'cvv':
      cvv(input.value).isValid ? delete errors.value['cvv'] : errors.value['cvv'] = 'Некорректный CVV'
      break;
    default:
      console.log(`Необработанный input: ${input.formId}`)
  }
}
const submitForm = () => {
  const values = formList.value.map(input => input.value)
  if (values.every(str => str.trim() !== '')) {
    console.log('Форма отправлена', formList.value.map(input => ({[input.formId]:input.value})));
  }
}

const store = useFocusedStore()

const setFocusInput = (e: FocusEvent) => {
  const input = e.target as HTMLInputElement
  store.setFocusInputStore(input.name)
}

onMounted(() => {
  const form = document.querySelector('form');


  if (form) {
    const inputsForm = form.querySelectorAll("input")
    inputsForm.forEach(inputsForm => {
      inputsForm.addEventListener('focus', setFocusInput)
    })
  }
})

onBeforeUnmount(() => {
  const form = document.querySelector('form');

  if (form) {
    const inputsForm = form.querySelectorAll("input")
    inputsForm.forEach(inputsForm => {
      inputsForm.removeEventListener('focus', setFocusInput)
    })
  }
})

</script>


