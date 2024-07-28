// export const enum Size {
//     s = 'small',
//     m = 'medium',
//     l = 'long',
// }

// Size[1]

// Object.values(Size);

// function getButtonSize(size: Size) {}

// getButtonSize(Size.m);
// getButtonSize('medium');
// getButtonSize('sdfsdf');
// 

// type Sizes = 's' | 'm' | 'l';

export const Sizes = {
    s: 'small',
    m: 'medium',
    l: 'long',
} as const;
export type Sizes = (typeof Sizes)[keyof typeof Sizes];

// (Sizes.s as any) = 'llll';
