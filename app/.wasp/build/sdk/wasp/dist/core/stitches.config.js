import { createStitches } from '@stitches/react';
// Note about using !important with some of the components:
// This is a workaround for CSS generated by Stitches not being specific enough
// and thus being overridden by Tailwind CSS. https://github.com/wasp-lang/wasp/issues/1764
// Long term we want to move away from Stitches and this is an acceptable workaround for now.
export const { styled, css, keyframes } = createStitches({
    theme: {
        colors: {
            waspYellow: '#ffcc00',
            gray900: '#1a202c',
            gray700: '#a1a5ab',
            gray600: '#d1d5db',
            gray500: 'gainsboro',
            gray400: '#f0f0f0',
            red: '#FED7D7',
            darkRed: '#fa3838',
            green: '#C6F6D5',
            brand: '$waspYellow',
            brandAccent: '#ffdb46',
            errorBackground: '$red',
            errorText: '#2D3748',
            successBackground: '$green',
            successText: '#2D3748',
            submitButtonText: 'black',
            formErrorText: '$darkRed',
        },
        fontSizes: {
            sm: '0.875rem'
        }
    }
});
//# sourceMappingURL=stitches.config.js.map