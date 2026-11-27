// import { computed, ref, watch } from 'vue'

// const STORAGE_KEY = 'content-property'

// const propertyArr = ['title', 'sparse', 'verbose'] as const

// export type PropertyPreference = (typeof propertyArr)[number]

// export type PropertyType = 'title' | 'sparse' | 'verbose'

// export const preference = ref(localStorage.getItem(STORAGE_KEY) || 'sparse')

// export const propertyState = computed<PropertyPreference>(() => {
//     switch (preference.value) {
//         case 'title':
//             return 'title'
//         case 'sparse':
//             return 'sparse'
//         case 'verbose':
//             return 'verbose'
//     }

//     return preference.value as PropertyPreference
// })

// export const setProperty = (value: string) => {
//     if (propertyArr.includes(value as PropertyPreference)) {
//         preference.value = value as PropertyPreference
//     }
// }

// watch(preference, (value) => {
//     localStorage.setItem(STORAGE_KEY, value)
// })

import { computed, ref } from 'vue'

export type PropertyType = 'title' | 'sparse' | 'verbose'

const STORAGE_KEY = 'content-property'

const propertyMap: Record<PropertyType, string> = {
    title: 'title',
    sparse: 'sparse',
    verbose: 'verbose',
}

const isPropertyType = (value: string | null): value is PropertyType => {
    return value === 'title' || value === 'sparse' || value === 'verbose'
}

const readSavedProperty = (): PropertyType => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return isPropertyType(saved) ? saved : 'sparse'
}

export const propertyState = ref<PropertyType>(readSavedProperty())
export const propertyStateClass = computed(() => propertyMap[propertyState.value])

export const setProperty = (p: PropertyType) => {
    propertyState.value = p

    localStorage.setItem(STORAGE_KEY, p)
}

export const properties = {
    defaults: (p: PropertyType = 'sparse') => propertyMap[p],
}
