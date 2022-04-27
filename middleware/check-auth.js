export default function (context) {
  console.log("[Middleware] just check");
    context.store.dispatch("initAuth", context.req);
}
