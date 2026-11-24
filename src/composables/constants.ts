import type { LayoutSize } from './sizing'
import { themes } from './themes'

export const fontAwesomeStrings = {
    lightbulb: 'fa-regular fa-lightbulb',
    moon: 'fa-regular fa-moon',
    gear: 'fa-solid fa-gear',
    home: 'fa-solid fa-house'
}

export const transition = {
    transition: 'transition-all duration-300 ease-in-out',
}

export const navbar = {
    nav: 'w-full z-20 top-0',
    navSection: 'flex flex-wrap items-center justify-between mx-auto p-4'
}

export const jumbotron = {
    table: 'my-10 columns-1 gap-5 sm:columns-2 2xl:columns-2',
    background: 'backdrop-blur-sm',
    position: 'py-8 px-4 mx-auto text-center lg:py-16 z-10 relative',
    heading1: 'mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl',
    text: 'mb-8 text-base font-normal text-body md:text-xl',
    relative: 'relative',
    button: 'absolute end-1.5 bottom-1.5 font-medium leading-5 text-xs px-3 py-1.5 hover:ring-1',
    card: 'mb-5 inline-block w-full break-inside-avoid min-h-53'
}

export const modal = {
    mainModal: 'fixed z-50 flex items-center justify-center w-full max-h-full p-4 overflow-x-hidden overflow-y-auto inset-0 bg-gray-900/70 backdrop-blur-sm',
    side: 'min-h-150 max-h-150 w-60 py-10 px-4 flex flex-col items-end shrink-0',
    nav: {
        mainNav: 'w-48 space-y-0.5',
        text: 'px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider'
    },
    sideSetting: {
        activeTabButton: 'w-full text-left px-2.5 py-1.5 text-[15px] font-medium my-2',
        activeTabButtonText: 'ring-1',
    },
    setting: {
        beforeMain: 'flex font-sane antialiased',
        main: 'flex-1 py-10 px-12 min-h-150 max-h-150 min-w-180',
        h1: 'text-xl font-semibold mb-6 ',
        h2: 'text-l font-semibold mb-6',
        h3: 'text-base font-semibold mb-6',
        section1: 'flex items-center justify-between mb-6',
        text1: 'text-[15px] font-medium',
        themeSection: 'mb-8',
        hr: 'my-6',
        sectionFlex: 'flex items-center gap-4',
        themeButtons1: 'relative w-13 h-13 border-2 focus:outline-none',
        themeButtons2: 'relative w-13 h-13 border flex items-center justify-center',
        sync1: ' ring-1',
        span1: 'absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center shadow',
        ternarySync1: 'border-2',
        ternarySync2: 'bg-transparent',
        widthButtons: 'relative w-full my-2 p-2 border-2 focus:outline-none',
        widthButtonsActive: 'relative w-full my-2 p-2 border-2 focus:outline-none'
    },
    content: {
        placeholderHeader: 'text-xl font-semibold capitalize mb-2',
        placeholderText: 'text-sm'
    }
}

export const contentList = {
    routerLinkBack: 'inline-block border px-4 py-2.5 mt-5',
    grid: 'my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10',
    gridContent: 'bg-neutral-primary-soft block p-6 border border-default shadow-xs',
    h5: 'mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading',
    routerLinkGo: 'inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none',
    p: 'mb-6 text-body',
    palceholderImage: {
        link: 'https://placehold.co/160x90?font=roboto'
    }
}

export const currentSettings = {
    currentSetting: 'decoration-2 rounded ring-1 p-2',
}

export const settingsSidebarItems = {
    appearance: {
        id: 'appearance',
        label: 'Appearance'
    },
    content: {
        id: 'content',
        label: 'Content'
    },
}

export const settingsThemes = {
    light: {
        id: 'light',
        name: 'Light',
        bgClass: themes.light.base,
    },
    dark: {
        id: 'dark',
        name: 'Dark',
        bgClass: themes.dark.base,
    }
}

export const settingsWidth: { id: LayoutSize, label: string, desc: string }[] =  [
    {
        id: 'compact',
        label: 'Compact',
        desc: 'Compact',
    },
    {
        id: 'standard',
        label: 'Standard',
        desc: 'Standard',
    },
    // {
    //     id: 'wide',
    //     label: 'wide',
    //     desc: 'Wide',
    // }
]

export const settingsContent = {
    title: {
        id: 'title',
        label: 'Title',
        desc: 'Title only',
    },
    sparse: {
        id: 'sparse',
        label: 'Sparse',
        desc: 'Title and Author',
    },
    verbose: {
        id: 'verbose',
        label: 'Verbose',
        desc: 'Title, Author, and Publish Date',
    },
}
