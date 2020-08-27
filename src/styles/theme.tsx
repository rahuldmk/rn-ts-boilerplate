export const colors = {
    blue: '#2E5BFF',
    lightblue: 'rgb(46,92,255)',
    green: '#33AC2E',
    yellow: '#F7C137',
    red: '#D63645',
    teal: '#00C1D4',
    black: '#2E384D',
    black2: '#69707F',
    black3: '#8798AD',
    white: '#FFFFFF',
    grey: '#BFC5D2',
    grey2: '#F4F6FC',
    grey3: '#EEF3F5',
    caption: '#2E384D',
    input: '#E0E7FF'
};

export const size = {
    font: 15,
    h1: 48,
    h2: 34,
    h3: 28,
    h4: 15,
    caption: 12,
    captionMedium: 13,
    paragraph: 15,

};

export const fonts = {
    h1: {
        fontSize: size.h1,
        color: colors.black,
        letterSpacing: -0.6,
        lineHeight: 57,
    },
    h2: {
        fontSize: size.h2,
        color: colors.black,
        letterSpacing: 0,
        lineHeight: 32,
    },
    h3: {
        fontSize: size.h3,
        color: colors.black,
        letterSpacing: 0,
        lineHeight: 32,

    },
    h4: {
        fontSize: size.h4,
        color: colors.black,
        letterSpacing: 0.6,
        lineHeight: 18
    },
    paragraph: {
        fontSize: size.paragraph,
        lineHeight: 22
    },
    paragraphGray: {
        fontSize: size.paragraph,
        lineHeight: 22,
        color: colors.grey
    },
    paragraphGray2: {
        fontSize: size.paragraph,
        lineHeight: 22,
        color: colors.grey2
    },
    caption: {
        fontSize: size.caption,
        color: colors.caption,
        letterSpacing: 1.12,
        lineHeight: 14,
    },
    captionMedium: {
        fontSize: size.captionMedium,
        color: colors.black,
        letterSpacing: 0,
        lineHeight: 22,
    }

}

export default { colors, fonts, size }