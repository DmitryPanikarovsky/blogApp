import { clNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(clNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(clNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            clNames(
                'someClass',
                {
                    hovered: true,
                    scrollable: true,
                },
                ['class1', 'class2'],
            ),
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            clNames(
                'someClass',
                {
                    hovered: true,
                    scrollable: false,
                },
                ['class1', 'class2'],
            ),
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            clNames(
                'someClass',
                {
                    hovered: true,
                    scrollable: undefined,
                },
                ['class1', 'class2'],
            ),
        ).toBe(expected);
    });
});
