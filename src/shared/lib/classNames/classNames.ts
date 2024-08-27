type Mods = Record<string, boolean | string>;

export const clNames = (styles: string, mods: Mods = {}, additional: string[] = []): string => [
    styles,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
]
    .join(' ');
