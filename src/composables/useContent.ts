// https://content.comark.dev/integrations/vite#create-the-browser-content-instance

import { ref } from 'vue'
import { comarkContent, type ContentFile } from 'comark-content/runtime'
import snapshot from 'comark-content/sources/snapshot'

export const content = comarkContent({
    // temporary
    source: snapshot('/api/content/snapshot/default.json', '/api/content/manifest.json'),
})

export const version = ref(0)

if (import.meta.hot) {
    import.meta.hot.on('comark:update', async ({ file }: { file: ContentFile }) => {
        await content.update(file)
        version.value++
    })
    import.meta.hot.on('comark:remove', async ({ key }: { key: string }) => {
        await content.remove(key)
        version.value++
    })
}
// https://content.comark.dev/examples/vite/vue
