import { Links } from './Constants';

//const CHAP = '\xa7';

const MAIN_INTRODUCTION = `
Welcome to the Dynamic TypeScript playground!

Dynamic TypeScript is a variant of TypeScript that uses TypeScript syntax with dynamic type checking. 
Its language features are similar to Source §1, but with optional type annotations.

You can add type annotations to [constant declarations](${Links.typescriptVariables}) and [functions](${Links.typescriptFunctions}). [Generic types](${Links.typescriptGenerics}) are also supported.

`;

// const HOTKEYS_INTRODUCTION = `

// In the editor on the left, you can use the [_Ace keyboard shortcuts_](${Links.aceHotkeys})
// and also the [_Source Academy keyboard shortcuts_](${Links.sourceHotkeys}).

// `;

const SIGN_OFF = `
-- Dorcas & Wei Feng, Lab T2
`;

const generateIntroductionText = (sourceType: string) => {
  return MAIN_INTRODUCTION + SIGN_OFF;
};

export const generateSourceIntroduction = (sourceVariant: string) => {
  return generateIntroductionText(`${sourceVariant}`);
};
