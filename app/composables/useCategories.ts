import type { Category } from '~/types/resources'

export const useCategories = () => {
  const categories = useState<Record<string, Category>>('categories', () => ({}))

  // @todo Cache categories on local storage.
  async function fetchCategories() {
    // Don't load data multiple times.
    if (Object.keys(categories.value).length) {
      return
    }

    const { apiBase } = useRuntimeConfig().public
    const data = await $fetch<(Category | null)[]>('api/categories', { baseURL: apiBase })

    categories.value = Object.fromEntries(
      data.filter((category): category is Category => !!category).map((category) => [String(category.id), category])
    )
  }

  return { categories, fetchCategories }
}
