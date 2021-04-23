import { Links } from './Constants';

//const CHAP = '\xa7';

const MAIN_INTRODUCTION = `
Welcome to the Dynamic TypeScript playground!

Dynamic TypeScript is a variant of TypeScript that uses TypeScript syntax with dynamic type checking. 
Its language features are similar to Source §1, but with type annotations.

Type annotations for [constant declarations](${Links.typescriptVariables}) are optional. However, for [functions](${Links.typescriptFunctions}), parameter and return types must be explicitly annotated. You can also use [generic types](${Links.typescriptGenerics}).

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
