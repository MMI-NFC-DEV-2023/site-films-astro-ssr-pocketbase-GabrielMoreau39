import { e as createComponent, f as createAstro, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_gQB29DJz.mjs';
import 'kleur/colors';
import { $ as $$Debug } from '../chunks/Debug_BXZDggpe.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cxr512dJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const personnes = await Astro2.locals.pb.collection("personne").getFullList();
  return renderTemplate`<!-- <pre>
     {JSON.stringify(personnes, null, 2)}
 </pre> -->${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Liste des personnes" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Debug", $$Debug, { "personnes": personnes })} ` })}`;
}, "C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/pages/personne/index.astro", void 0);

const $$file = "C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/pages/personne/index.astro";
const $$url = "/personne";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
