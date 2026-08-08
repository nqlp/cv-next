import { notFound } from "next/navigation";

/**
 * Without this catch-all, `/fr/zzz` matches no route at all and Next falls back to the
 * *root* 404, so `[locale]/not-found.tsx` would never be reached. Here the route does
 * match, `notFound()` is thrown, and the translated 404 takes over.
 */
export default function CatchAllPage() {
    notFound();
}
