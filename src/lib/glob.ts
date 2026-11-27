export const blogFiles = import.meta.glob('../../content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export const contentFiles = import.meta.glob('../../content/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export const individualFiles = import.meta.glob('../../content/individual/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export const PPEFiles = import.meta.glob('../../content/ppe/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export const testFiles = import.meta.glob('../../content/test/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export const whyFiles = import.meta.glob('../../content/why/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>
