type LayoutSize = 'compact' | 'standard' | 'wide'

export const sizings = {
    fontAwesome: 'text-[2rem]',
    default: [
        'w-full',
        'min-w-0',
        'wrap-break-word',
        'mx-auto',
        'items-center',
        'justify-center'
    ],
    /**
    * @param {string} size size='standard' - A value where size is specified from 3 types(`compact`, `standard`, `wide`), defaults to `standard` if left blank.
    * @returns {string} Returns the size specified, else fallback to `standard`.
    *
    */
    defaults: function(size: LayoutSize = 'standard'): string {
        const sizeMap: Record<LayoutSize, string> = {
            compact: 'max-w-[60rem]',
            standard: 'max-w-[80rem]',
            wide: 'max-w-[100rem]'
        }

        return sizeMap[size]
    }
}

