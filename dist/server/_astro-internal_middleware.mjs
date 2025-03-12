import PocketBase from 'pocketbase';
import { d as defineMiddleware, s as sequence } from './chunks/index_DQ6T4x7s.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D7g44bwF.mjs';
import 'kleur/colors';
import './chunks/astro/server_gQB29DJz.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(
  async ({ locals, request }, next) => {
    console.log(undefined                                   );
    locals.pb = new PocketBase(undefined                                   );
    locals.pb.authStore.loadFromCookie(request.headers.get("cookie") || "");
    try {
      locals.pb.authStore.isValid && await locals.pb.collection("users").authRefresh();
    } catch (_) {
      locals.pb.authStore.clear();
    }
    const response = await next();
    response.headers.append("set-cookie", locals.pb.authStore.exportToCookie());
    return response;
  }
);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
