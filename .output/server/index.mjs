globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ee-zV9BvP6SpT1Q6PVb8EsHM0vanLo\"",
		"mtime": "2026-11-19T08:02:15.423Z",
		"size": 238,
		"path": "../public/robots.txt"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1e990-CCUDbpXHInunH6PbOw07tspdnhE\"",
		"mtime": "2026-11-16T20:22:13.576Z",
		"size": 125328,
		"path": "../public/favicon.ico"
	},
	"/hh": {
		"type": "text/x-c; charset=utf-8",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-11-16T19:06:26.627Z",
		"size": 20373,
		"path": "../public/hh"
	},
	"/assets/bride-portrait-RFmXK-Ko.jpg": {
		"type": "image/jpeg",
		"etag": "\"22c95-vyxKKtulgfystGQZzeuGCPMnakA\"",
		"mtime": "2026-11-19T08:12:25.531Z",
		"size": 142485,
		"path": "../public/assets/bride-portrait-RFmXK-Ko.jpg"
	},
	"/assets/couple-album-02-DFN2Pqeq.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5f523-AhE6btfIBnrnropNU5FvOftXAKw\"",
		"mtime": "2026-11-19T08:12:25.549Z",
		"size": 390435,
		"path": "../public/assets/couple-album-02-DFN2Pqeq.jpeg"
	},
	"/wedding-share.jpg": {
		"type": "image/jpeg",
		"etag": "\"326a1-fA/7dQN1HxxQez6VPVinJ6mjvXY\"",
		"mtime": "2026-11-19T07:25:49.188Z",
		"size": 206497,
		"path": "../public/wedding-share.jpg"
	},
	"/assets/couple-album-05-DKQSevuN.jpeg": {
		"type": "image/jpeg",
		"etag": "\"33764-8i/0g2ZZA7IV1N234BsAn0vVnVY\"",
		"mtime": "2026-11-19T08:12:25.567Z",
		"size": 210788,
		"path": "../public/assets/couple-album-05-DKQSevuN.jpeg"
	},
	"/assets/couple-album-04-DXRGEyZh.jpeg": {
		"type": "image/jpeg",
		"etag": "\"76a2f-VOjUy+5XCcGwNMqiBZuHzZX7TSs\"",
		"mtime": "2026-11-19T08:12:25.559Z",
		"size": 485935,
		"path": "../public/assets/couple-album-04-DXRGEyZh.jpeg"
	},
	"/assets/groom-portrait-BIE8idqq.jpg": {
		"type": "image/jpeg",
		"etag": "\"18657-pr66oA/OaXDA8Ogdo+05tmebdDg\"",
		"mtime": "2026-11-19T08:12:25.753Z",
		"size": 99927,
		"path": "../public/assets/groom-portrait-BIE8idqq.jpg"
	},
	"/assets/couple-sunset-cTlY9jXx.jpg": {
		"type": "image/jpeg",
		"etag": "\"292b4-C4iIA3qAMFyVXAhA/2QBqEty/aA\"",
		"mtime": "2026-11-19T08:12:25.604Z",
		"size": 168628,
		"path": "../public/assets/couple-sunset-cTlY9jXx.jpg"
	},
	"/assets/couple-palace-CGApUC4l.jpg": {
		"type": "image/jpeg",
		"etag": "\"2dec0-tU+GKz+prNP4tbHM89wgqSzLXyA\"",
		"mtime": "2026-11-19T08:12:25.598Z",
		"size": 188096,
		"path": "../public/assets/couple-palace-CGApUC4l.jpg"
	},
	"/assets/styles-CiGz6QWD.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1608e-toqvDYf9taCbHVdJgmBexjh4tLk\"",
		"mtime": "2026-11-19T08:12:25.760Z",
		"size": 90254,
		"path": "../public/assets/styles-CiGz6QWD.css"
	},
	"/assets/couple-album-01-4vCjuAH8.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a4dc5-TfYEW6CerMQf06s2ukWHgFlOCAE\"",
		"mtime": "2026-11-19T08:12:25.542Z",
		"size": 675269,
		"path": "../public/assets/couple-album-01-4vCjuAH8.jpeg"
	},
	"/assets/couple-album-03-DZfS1Po9.jpeg": {
		"type": "image/jpeg",
		"etag": "\"b29ff-RqOQl9itujiSTKo78IkxfG+cVdg\"",
		"mtime": "2026-11-19T08:12:25.554Z",
		"size": 731647,
		"path": "../public/assets/couple-album-03-DZfS1Po9.jpeg"
	},
	"/assets/couple-album-06-CqTo6UJJ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"98736-eWD6HOq3g76ngzaSfxBBecsnny0\"",
		"mtime": "2026-11-19T08:12:25.572Z",
		"size": 624438,
		"path": "../public/assets/couple-album-06-CqTo6UJJ.jpeg"
	},
	"/music.mp3": {
		"type": "audio/mpeg",
		"etag": "\"8d495-j5J0FwmmjxEqEfTXJa14eP/WAR0\"",
		"mtime": "2026-11-16T19:06:32.053Z",
		"size": 578709,
		"path": "../public/music.mp3"
	},
	"/assets/couple-album-07-eXkyRKEx.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a0526-QxmR1Wg1oHOwAyEyOd7ATQpAkUE\"",
		"mtime": "2026-11-19T08:12:25.577Z",
		"size": 656678,
		"path": "../public/assets/couple-album-07-eXkyRKEx.jpeg"
	},
	"/assets/couple-album-08-DsVUFh2H.jpeg": {
		"type": "image/jpeg",
		"etag": "\"ab0a8-5DubwHx5Quhp1zyF6SOenSJAduM\"",
		"mtime": "2026-11-19T08:12:25.590Z",
		"size": 700584,
		"path": "../public/assets/couple-album-08-DsVUFh2H.jpeg"
	},
	"/assets/routes-D28gnCJo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"301c9-9P5czokjujsS1tkqh0edqeAgj1U\"",
		"mtime": "2026-11-19T08:12:25.524Z",
		"size": 197065,
		"path": "../public/assets/routes-D28gnCJo.js"
	},
	"/assets/couple-album-09-DiaSlsB8.jpeg": {
		"type": "image/jpeg",
		"etag": "\"cc180-aZHUAXZal+fuR4/bwphJ0hgA/FE\"",
		"mtime": "2026-11-19T08:12:25.596Z",
		"size": 835968,
		"path": "../public/assets/couple-album-09-DiaSlsB8.jpeg"
	},
	"/assets/index-CQbY16IZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53f5c-H4zkidjGgo8Iw29Jp1uv7ct/4EU\"",
		"mtime": "2026-11-19T08:12:25.520Z",
		"size": 343900,
		"path": "../public/assets/index-CQbY16IZ.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6wotKB = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6wotKB
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
