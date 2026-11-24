import { blogFiles, contentFiles, memberFiles, PPEFiles, whyFiles, testFiles } from './glob'
import { getAllContent, type PostMeta } from './content'
import { jumbotronRouterString, jumbotronString } from '@/composables/strings'

export const contentFilesByEntry = {
    content: contentFiles,
    blog: blogFiles,
    members: memberFiles,
    why: whyFiles,
    ppe: PPEFiles,
    test: testFiles
} as const

export type ContentEntry = keyof typeof contentFilesByEntry

const contentByEntry = Object.fromEntries(
    await Promise.all(
        (Object.keys(contentFilesByEntry) as ContentEntry[]).map(async (e) => [
            e,
            await getAllContent(contentFilesByEntry[e]),
        ] as const),
    )
) as Record<ContentEntry, PostMeta[]>

type CardSpec = {
    id: string
    entry: ContentEntry
    slug: string
    heading: string
    button: string
}

const cardSpecs = [
    {
        id: 'content',
        entry: 'blog',
        slug: 'content',
        heading: jumbotronString.mainHeader,
        button: jumbotronRouterString.content,
    },
    {
        id: 'names',
        entry: 'members',
        slug: 'names',
        heading: jumbotronString.names,
        button: jumbotronRouterString.members,
    },
    {
        id: 'why-do-this',
        entry: 'why',
        slug: 'why-do-this',
        heading: jumbotronString.whyDoThis,
        button: jumbotronRouterString.reason,
    },
    {
        id: 'ppe',
        entry: 'ppe',
        slug: 'ppe',
        heading: jumbotronString.PPE,
        button: jumbotronRouterString.content,
    },
    {
        id: 'content-test',
        entry: 'test',
        slug: 'content-test',
        heading: jumbotronString.contentTest,
        button: jumbotronRouterString.noReason,
    },
    {
        id: 'root-content',
        entry: 'content',
        slug: 'root-content',
        heading: jumbotronString.rootContent,
        button: jumbotronRouterString.blank,
    },
] satisfies CardSpec[]

export const cards = cardSpecs.map((c) => ({
    ...c,
    post: contentByEntry[c.entry].find((p) => p.slug === c.slug)
}))
