/**
 * Client-side auth middleware
 * Redirects unauthenticated users from protected pages
 */
export default defineRouteMiddleware(async (to) => {
  // Protected routes that require authentication
  const protectedRoutes = ['/admin']
  
  if (protectedRoutes.some(route => to.path.startsWith(route))) {
    const { getSession } = useSupabase()
    const session = await getSession()
    
    if (!session) {
      return navigateTo('/login')
    }
  }
})
