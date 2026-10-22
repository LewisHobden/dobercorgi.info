// Load resource data from the API on any resources page.
export default defineNuxtRouteMiddleware(async (to) => {
  // Only do the lookup if the user goes to a resource page.
  if (!to.path.startsWith('/resources')) {
    return
  }

  const { categories, fetchCategories } = useCategories()
  await fetchCategories()

  const category = to.params.category
  if (typeof category === 'string' && !categories.value[category]) {
    return abortNavigation(createError({ statusCode: 404, statusMessage: 'Category not found' }))
  }
})
