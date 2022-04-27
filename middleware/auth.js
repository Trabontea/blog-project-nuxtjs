export default function (context) {
  console.log("[Middleware] just Auth");
  if (!context.store.getters.isAuthenticated) {
    context.redirect("/admin/auth");
  }
}
