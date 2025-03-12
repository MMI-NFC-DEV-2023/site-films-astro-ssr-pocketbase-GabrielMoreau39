import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bvmg5K7h.mjs';
import { manifest } from './manifest_DQ76LxHz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/auth-password.astro.mjs');
const _page2 = () => import('./pages/film.astro.mjs');
const _page3 = () => import('./pages/personne.astro.mjs');
const _page4 = () => import('./pages/src/env.d.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/auth-password.astro", _page1],
    ["src/pages/film/index.astro", _page2],
    ["src/pages/personne/index.astro", _page3],
    ["src/pages/src/env.d.ts", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/dist/client/",
    "server": "file:///C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
