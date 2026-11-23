export const blogFiles = import.meta.glob('../../content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export const memberFiles = import.meta.glob('../../content/members/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export const contentFiles = import.meta.glob('../../content/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export const contentFilesByEntry = {
    content: contentFiles,
    blog: blogFiles,
    members: memberFiles,
} as const

export type ContentEntry = keyof typeof contentFilesByEntry
