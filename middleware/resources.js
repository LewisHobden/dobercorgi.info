// Load resource data from the API on any resources page.
export default async ({ route, store }) => {
    // Only do the lookup if the user goes to a resource page.
    if(!route.path.startsWith("/resources"))
        return;

    await store.dispatch('FETCH_CATEGORIES', {});
}