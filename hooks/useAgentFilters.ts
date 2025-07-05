'use client';
import { useQueryStates } from 'nuqs';
import { parseAsArrayOf, parseAsString } from 'nuqs';

export function useAgentFilters() {
    const [filters, setFilters] = useQueryStates(
        {
            name: parseAsString.withDefault(''),
            status: parseAsArrayOf(parseAsString).withDefault([]),
            category: parseAsArrayOf(parseAsString).withDefault([]),
            pricing: parseAsString.withDefault('all'),
        },
        {
            history: 'replace',
            shallow: true,
        }
    );

    const clearAll = () => setFilters(null);

    return { filters, setFilters, clearAll };
}
