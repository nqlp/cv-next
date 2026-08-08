import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
    // Everything except /api, /_next, /_vercel and static files (which contain a dot).
    // The `.*\..*` clause keeps /Paul_Nguyen_CV.pdf and /caricature.jpg from being redirected.
    matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
