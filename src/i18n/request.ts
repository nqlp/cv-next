import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    // `hasLocale` is a type guard, so the `as "en" | "fr"` cast is no longer needed.
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
