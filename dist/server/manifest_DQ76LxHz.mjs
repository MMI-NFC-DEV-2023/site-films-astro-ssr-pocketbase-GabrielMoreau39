import 'kleur/colors';
import { n as decodeKey } from './chunks/astro/server_gQB29DJz.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_D7g44bwF.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B96fhfpK.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/","cacheDir":"file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/node_modules/.astro/","outDir":"file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/dist/","srcDir":"file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/","publicDir":"file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/public/","buildClientDir":"file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/dist/client/","buildServerDir":"file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"src/env.d","links":[],"scripts":[],"styles":[],"routeData":{"route":"/src/env.d","isIndex":false,"type":"endpoint","pattern":"^\\/src\\/env\\.d\\/?$","segments":[[{"content":"src","dynamic":false,"spread":false}],[{"content":"env.d","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/src/env.d.ts","pathname":"/src/env.d","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/auth-password.C9728TUa.css"}],"routeData":{"route":"/auth-password","isIndex":false,"type":"page","pattern":"^\\/auth-password\\/?$","segments":[[{"content":"auth-password","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth-password.astro","pathname":"/auth-password","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/auth-password.C9728TUa.css"}],"routeData":{"route":"/film","isIndex":true,"type":"page","pattern":"^\\/film\\/?$","segments":[[{"content":"film","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/film/index.astro","pathname":"/film","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/auth-password.C9728TUa.css"}],"routeData":{"route":"/personne","isIndex":true,"type":"page","pattern":"^\\/personne\\/?$","segments":[[{"content":"personne","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/personne/index.astro","pathname":"/personne","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/pages/auth-password.astro",{"propagation":"none","containsHead":true}],["C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/pages/film/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/pages/personne/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/auth-password@_@astro":"pages/auth-password.astro.mjs","\u0000@astro-page:src/pages/film/index@_@astro":"pages/film.astro.mjs","\u0000@astro-page:src/pages/personne/index@_@astro":"pages/personne.astro.mjs","\u0000@astro-page:src/pages/src/env.d@_@ts":"pages/src/env.d.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DQ76LxHz.mjs","C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C3oczVGJ.mjs","astro:scripts/page.js":"_astro/page.BCFd37Sx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/auth-password.C9728TUa.css","/favicon.svg","/_astro/page.BCFd37Sx.js","/_astro/page.BCFd37Sx.js","/src/env.d","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"NtWQ8rmFK2beL3F4J1SkaVpQ+S9ui8QQuySHXqw/pUA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
