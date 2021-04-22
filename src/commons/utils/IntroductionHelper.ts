import { Links } from './Constants';

//const CHAP = '\xa7';

const MAIN_INTRODUCTION = `
Welcome to the Dynamic TypeScript playground!

This is language variant of TypeScript that uses TypeScript syntax with dynamic type checking. 
It is a superset of Source §1 — in Source Academy. 

For constant declarations, Type annotations are optional, But in function declaration and function calls, they are required for parameter and return types in our language.

Lab T2 Dorcas&Wei Feng


`;

const HOTKEYS_INTRODUCTION = `

In the editor on the left, you can use the [_Ace keyboard shortcuts_](${Links.aceHotkeys}) 
and also the [_Source Academy keyboard shortcuts_](${Links.sourceHotkeys}).

`;

const generateSourceDocsLink = (sourceType: string) => {
  switch (sourceType) {
    case 'typescript':
      return `You have chosen the sublanguage Dynamic TypeScript mode.`;
    default:
      return 'You have chosen an invalid sublanguage. Please pick a sublanguage from the dropdown instead.';
  }
};

const generateIntroductionText = (sourceType: string) => {
  return MAIN_INTRODUCTION + generateSourceDocsLink(sourceType) + HOTKEYS_INTRODUCTION;
};

export const generateSourceIntroduction = (sourceVariant: string) => {
  return generateIntroductionText(`${sourceVariant}`);
};
