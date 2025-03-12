import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, k as renderHead, l as renderSlot } from './astro/server_gQB29DJz.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> <nav> <a href="/">Accueil</a> <a href="/personne">Liste des personnes</a> <a href="/film">Liste des films</a> <a href="/auth-password">Authentification</a> </nav> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/gabri/OneDrive/Documents/GitHub/site-films-astro-ssr-pocketbase-GabrielMoreau39/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
