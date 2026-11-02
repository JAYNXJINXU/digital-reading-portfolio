import { parseMarkdown, type MarkdownDocument as Document } from 'comark'
import math from '@comark/vue/plugins/math'
import shiki from '@comark/vue/plugins/shiki'

const plugs = [
    shiki(),
    math()
]

const rawFiles = import.meta.glob('../../content/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

export interface PostMeta {
    slug: string
    title: string
    description: string
    pubDate: string
    modDate: string
    tags: string[]
    authors: string[]
}

export interface Post extends PostMeta {
    tree: Document
}

function slugFromPath(path: string): string {
    return path.split('/').pop()!.replace(/\.md$/, '')
}

export async function getAllContent(): Promise<PostMeta[]> {
    const posts: PostMeta[] = []

    for (const [path, content] of Object.entries(rawFiles)) {
        const slug = slugFromPath(path)
        const tree = await parseMarkdown(content)
        const fm = tree.frontmatter as Record<string, unknown>

        posts.push({
            slug,
            title: fm.title as string,
            description: fm.description as string,
            pubDate: fm.pubDate as string,
            modDate: fm.modDate as string,
            tags: (fm.tags as string[]) || [],
            authors: (fm.authors as string[]) || [],
        })
    }

    return posts.sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf())
}

export async function getContent(slug: string): Promise<Post> {
    const entry = Object.entries(rawFiles).find(([path]) => slugFromPath(path) === slug)
    if (!entry) throw new Error(`Post not found: ${slug}`)

    const [, content] = entry
    const tree = await parseMarkdown(content, {
        plugins: plugs,
    })

    const fm = tree.frontmatter as Record<string, unknown>

    return {
        slug,
        title: fm.title as string,
        description: fm.description as string,
        pubDate: fm.pubDate as string,
        modDate: fm.modDate as string,
        tags: (fm.tags as string[]) || [],
        authors: (fm.authors as string[]) || [],
        tree,
    }
}
