import { computed, ref } from 'vue'

export type LayoutSize = 'compact' | 'standard' | 'wide'

const STORAGE_KEY = 'layout-size'

const sizeMap: Record<LayoutSize, string> = {
    compact: 'max-w-[60rem]',
    standard: 'max-w-[80rem]',
    wide: 'max-w-[100rem]',
}

const isLayoutSize = (value: string | null): value is LayoutSize => {
    return value == 'compact' || value == 'standard' || value == 'wide'
}

const readSavedSize = (): LayoutSize => {
    if (typeof window == 'undefined') return 'standard'

    const saved = localStorage.getItem(STORAGE_KEY)
    return isLayoutSize(saved) ? saved : 'standard'
}
export const layoutSize = ref<LayoutSize>(readSavedSize())
export const layoutSizeClass = computed(() => sizeMap[layoutSize.value])

export const setLayoutSize = (size: LayoutSize) => {
    layoutSize.value = size

    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, size)
    }
}

export const sizings = {
    fontAwesomeFont: 'text-[2rem]',
    default: ['w-full', 'min-w-0', 'wrap-break-word', 'mx-auto', 'items-center', 'justify-center'],
    /**
     * size='standard' - A value where size is specified from 3 types(`compact`, `standard`, `wide`), defaults to `standard` if left blank.
     */
    defaults: (size: LayoutSize = 'standard') => sizeMap[size],
    // defaults: function(size: LayoutSize = 'standard'): string {
    //     return sizeMap[size]
    // }
}

// since we're using this in another component -> we need something that can hold the value
