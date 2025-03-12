import { e as createComponent, f as createAstro, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_gQB29DJz.mjs';
import 'kleur/colors';
import { $ as $$Debug } from '../chunks/Debug_BXZDggpe.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cxr512dJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const films = await Astro2.locals.pb.collection("films").getFullList({ expand: "producteur, scenaristes, roles.acteur" });
  return renderTemplate`<!-- <pre>
     {JSON.stringify(personnes, null, 2)}
 </pre> -->${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Liste des films" }, { "default": ($$result2) => renderTemplate`${films.map((film) => renderTemplate`${maybeRenderHead()}<div> <h2>Film : ${film.titre}</h2> <p>Année de sortie : ${film.date_sortie}</p> ${film.expand?.producteur && renderTemplate`<p>Producteur : ${film.expand?.producteur.nom}</p>`} <p>Langue : ${film.langue || "Non renseign\xE9"}</p> ${film.expand?.scenaristes && renderTemplate`<p>
Scénaristes :${" "} ${film.expand?.scenaristes?.map((s) => renderTemplate`<span>${s.nom + " "}</span>`)} </p>`} <p>Synopsis : ${film.synopsis || "Non renseign\xE9"}</p> <p>Durée du film : ${film.duree || "Non renseign\xE9"}</p> ${film.expand?.roles && renderTemplate`<p>Casting : ${film.expand?.roles?.map((r) => renderTemplate`<span>${r.nom_role + " "}</span><span>Joué par : ${r.expand?.acteur.nom}</span>`)}</p>`} </div>`)}${renderComponent($$result2, "Debug", $$Debug, { "films": films })} ` })}`;
}, "C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/pages/film/index.astro", void 0);

const $$file = "C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/pages/film/index.astro";
const $$url = "/film";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
