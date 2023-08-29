import { css } from 'utils/css'

export const discordCustomColors = css`
  :root,
  .theme-dark,
  .theme-light {
    --textbox-markdown-syntax: var(--synqats-gb-fg-0);

    --background-primary: var(--synqats-gb-bg-0);
    --background-secondary: var(--synqats-gb-bg-0);
    --background-secondary-alt: var(--synqats-gb-bg-dim);
    --background-tertiary: var(--synqats-gb-bg-dim);
    --background-floating: var(--synqats-gb-bg-0);

    --background-modifier-accent: var(--synqats-gb-bg-dim);
    --background-modifier-hover: var(--synqats-gb-bg-0);
    --background-modifier-active: var(--synqats-gb-bg-3);
    --background-modifier-selected: var(--synqats-gb-bg-4);

    --modal-background: var(--synqats-gb-bg-1);
    --modal-footer-background: var(--synqats-gb-bg-dim);

    --mention-background: var(--synqats-gb-bg-diff-red);

    --bg-overlay-1: var(--synqats-gb-bg-word);
    --bg-overlay-2: var(--synqats-gb-bg-0);
    --bg-overlay-3: var(--synqats-gb-bg-0);

    --bg-overlay-chat: var(--synqats-gb-bg-1);
    --bg-overlay-app-frame: var(--synqats-gb-bg-dim);
    --bg-overlay-selected: var(--synqats-gb-bg-2);
    --bg-overlay-hover: var(--synqats-gb-bg-4);
    --bg-overlay-active: var(--synqats-gb-bg-1);

    --text-normal: var(--synqats-gb-fg-0);
    --text-muted: var(--synqats-gb-grey-0);

    --interactive-active: var(--synqats-gb-fg-1);
    --interactive-hover: var(--synqats-gb-fg-1);
    --interactive-muted: var(--synqats-gb-grey-0);
    --interactive-normal: var(--synqats-gb-grey-2);

    --header-primary: var(--synqats-gb-fg-1);
    --header-secondary: var(--synqats-gb-grey-2);

    --channel-icon: var(--synqats-gb-grey-2);
    --channels-default: var(--synqats-gb-grey-2);

    --input-placeholder-text: var(--synqats-gb-grey-1);

    --channel-text-area-placeholder: var(--synqats-gb-grey-1);

    --button-secondary-background: var(--synqats-gb-bg-4);
    --button-secondary-background-active: var(--synqats-gb-bg-5);
    --button-secondary-background-disabled: var(--synqats-gb-bg-word);
    --button-secondary-background-hover: var(--synqats-gb-bg-5);

    --button-positive-background: var(--green-430);
    --button-positive-background-active: var(--green-530);
    --button-positive-background-disabled: var(--green-430);
    --button-positive-background-hover: var(--green-500);

    --button-danger-background: var(--red-430);
    --button-danger-background-active: var(--red-530);
    --button-danger-background-disabled: var(--red-430);
    --button-danger-background-hover: var(--red-500);

    --button-outline-brand-background: hsl(var(--white-500-hsl) / 0);
    --button-outline-brand-background-active: var(--brand-560);
    --button-outline-brand-background-hover: var(--brand-500);
    --button-outline-brand-border: var(--brand-500);
    --button-outline-brand-border-active: var(--brand-560);
    --button-outline-brand-border-hover: var(--brand-500);
    --button-outline-brand-text: var(--white-500);
    --button-outline-brand-text-active: var(--white-500);
    --button-outline-brand-text-hover: var(--white-500);

    --button-outline-danger-background: hsl(var(--white-500-hsl) / 0);
    --button-outline-danger-background-active: var(--red-460);
    --button-outline-danger-background-hover: var(--red-430);
    --button-outline-danger-border: var(--red-400);
    --button-outline-danger-border-active: var(--red-430);
    --button-outline-danger-border-hover: var(--red-430);
    --button-outline-danger-text: var(--white-500);
    --button-outline-danger-text-active: var(--white-500);
    --button-outline-danger-text-hover: var(--white-500);

    --button-outline-positive-background: hsl(var(--white-500-hsl) / 0);
    --button-outline-positive-background-active: var(--green-530);
    --button-outline-positive-background-hover: var(--green-430);
    --button-outline-positive-border: var(--green-360);
    --button-outline-positive-border-active: var(--green-530);
    --button-outline-positive-border-hover: var(--green-430);
    --button-outline-positive-text: var(--white-500);
    --button-outline-positive-text-active: var(--white-500);
    --button-outline-positive-text-hover: var(--white-500);

    --button-outline-primary-background: transparent;
    --button-outline-primary-background-active: var(--synqats-gb-bg-1);
    --button-outline-primary-background-hover: var(--synqats-gb-bg-4);
    --button-outline-primary-border: var(--synqats-gb-bg-4);
    --button-outline-primary-border-active: var(--synqats-gb-bg-5);
    --button-outline-primary-border-hover: var(--synqats-gb-bg-5);
    --button-outline-primary-text: var(--synqats-gb-grey-2);
    --button-outline-primary-text-active: var(--synqats-gb-fg-1);
    --button-outline-primary-text-hover: var(--synqats-gb-fg-1);

    --brand-experiment: var(--synqats-gb-accent-purple);
    --brand-100: var(--synqats-gb-accent-purple);
    --brand-130: var(--synqats-gb-accent-purple);
    --brand-160: var(--synqats-gb-accent-purple);
    --brand-200: var(--synqats-gb-accent-purple);
    --brand-230: var(--synqats-gb-accent-purple);
    --brand-260: var(--synqats-gb-accent-purple);
    --brand-300: var(--synqats-gb-accent-purple);
    --brand-330: var(--synqats-gb-accent-purple);
    --brand-345: var(--synqats-gb-accent-purple);
    --brand-360: var(--synqats-gb-accent-purple);
    --brand-400: var(--synqats-gb-accent-purple);
    --brand-430: var(--synqats-gb-accent-purple);
    --brand-460: var(--synqats-gb-accent-purple);
    --brand-500: var(--synqats-gb-accent-purple);
    --brand-530: var(--synqats-gb-accent-purple);
    --brand-560: var(--synqats-gb-accent-purple);
    --brand-600: var(--synqats-gb-accent-purple);
    --brand-630: var(--synqats-gb-accent-purple);
    --brand-660: var(--synqats-gb-accent-purple);
    --brand-700: var(--synqats-gb-accent-purple);
    --brand-730: var(--synqats-gb-accent-purple);
    --brand-760: var(--synqats-gb-accent-purple);
    --brand-800: var(--synqats-gb-accent-purple);
    --brand-830: var(--synqats-gb-accent-purple);
    --brand-860: var(--synqats-gb-accent-purple);
    --brand-900: var(--synqats-gb-accent-purple);

    --orange-100: var(--synqats-gb-accent-orange);
    --orange-130: var(--synqats-gb-accent-orange);
    --orange-160: var(--synqats-gb-accent-orange);
    --orange-200: var(--synqats-gb-accent-orange);
    --orange-230: var(--synqats-gb-accent-orange);
    --orange-260: var(--synqats-gb-accent-orange);
    --orange-300: var(--synqats-gb-accent-orange);
    --orange-330: var(--synqats-gb-accent-orange);
    --orange-345: var(--synqats-gb-accent-orange);
    --orange-360: var(--synqats-gb-accent-orange);
    --orange-400: var(--synqats-gb-accent-orange);
    --orange-430: var(--synqats-gb-accent-orange);
    --orange-460: var(--synqats-gb-accent-orange);
    --orange-500: var(--synqats-gb-accent-orange);
    --orange-530: var(--synqats-gb-accent-orange);
    --orange-560: var(--synqats-gb-accent-orange);
    --orange-600: var(--synqats-gb-accent-orange);
    --orange-630: var(--synqats-gb-accent-orange);
    --orange-660: var(--synqats-gb-accent-orange);
    --orange-700: var(--synqats-gb-accent-orange);
    --orange-730: var(--synqats-gb-accent-orange);
    --orange-760: var(--synqats-gb-accent-orange);
    --orange-800: var(--synqats-gb-accent-orange);
    --orange-830: var(--synqats-gb-accent-orange);
    --orange-860: var(--synqats-gb-accent-orange);
    --orange-900: var(--synqats-gb-accent-orange);

    --primary-100: var(--synqats-gb-bg-1);
    --primary-130: var(--synqats-gb-bg-1);
    --primary-160: var(--synqats-gb-bg-1);
    --primary-200: var(--synqats-gb-bg-1);
    --primary-230: var(--synqats-gb-bg-1);
    --primary-260: var(--synqats-gb-bg-1);
    --primary-300: var(--synqats-gb-bg-1);
    --primary-330: var(--synqats-gb-bg-1);
    --primary-345: var(--synqats-gb-bg-1);
    --primary-360: var(--synqats-gb-bg-1);
    --primary-400: var(--synqats-gb-bg-1);
    --primary-430: var(--synqats-gb-bg-1);
    --primary-460: var(--synqats-gb-bg-1);
    --primary-500: var(--synqats-gb-bg-1);
    --primary-530: var(--synqats-gb-bg-1);
    --primary-560: var(--synqats-gb-bg-1);
    --primary-600: var(--synqats-gb-bg-1);
    --primary-630: var(--synqats-gb-bg-1);
    --primary-645: var(--synqats-gb-bg-1);
    --primary-660: var(--synqats-gb-bg-1);
    --primary-700: var(--synqats-gb-bg-1);
    --primary-730: var(--synqats-gb-bg-1);
    --primary-760: var(--synqats-gb-bg-1);
    --primary-800: var(--synqats-gb-bg-1);
    --primary-830: var(--synqats-gb-bg-1);
    --primary-860: var(--synqats-gb-bg-1);
    --primary-900: var(--synqats-gb-bg-1);

    --green-100: var(--synqats-gb-accent-green);
    --green-130: var(--synqats-gb-accent-green);
    --green-160: var(--synqats-gb-accent-green);
    --green-200: var(--synqats-gb-accent-green);
    --green-230: var(--synqats-gb-accent-green);
    --green-260: var(--synqats-gb-accent-green);
    --green-300: var(--synqats-gb-accent-green);
    --green-330: var(--synqats-gb-accent-green);
    --green-345: var(--synqats-gb-accent-green);
    --green-360: var(--synqats-gb-accent-green);
    --green-400: var(--synqats-gb-accent-green);
    --green-430: var(--synqats-gb-accent-green);
    --green-460: var(--synqats-gb-accent-green);
    --green-500: var(--synqats-gb-accent-green);
    --green-530: var(--synqats-gb-accent-green);
    --green-560: var(--synqats-gb-accent-green);
    --green-600: var(--synqats-gb-accent-green);
    --green-630: var(--synqats-gb-accent-green);
    --green-660: var(--synqats-gb-accent-green);
    --green-700: var(--synqats-gb-accent-green);
    --green-730: var(--synqats-gb-accent-green);
    --green-760: var(--synqats-gb-accent-green);
    --green-800: var(--synqats-gb-accent-green);
    --green-830: var(--synqats-gb-accent-green);
    --green-860: var(--synqats-gb-accent-green);
    --green-900: var(--synqats-gb-accent-green);

    --blue-100: var(--synqats-gb-accent-blue);
    --blue-130: var(--synqats-gb-accent-blue);
    --blue-160: var(--synqats-gb-accent-blue);
    --blue-200: var(--synqats-gb-accent-blue);
    --blue-230: var(--synqats-gb-accent-blue);
    --blue-260: var(--synqats-gb-accent-blue);
    --blue-300: var(--synqats-gb-accent-blue);
    --blue-330: var(--synqats-gb-accent-blue);
    --blue-345: var(--synqats-gb-accent-blue);
    --blue-360: var(--synqats-gb-accent-blue);
    --blue-400: var(--synqats-gb-accent-blue);
    --blue-430: var(--synqats-gb-accent-blue);
    --blue-460: var(--synqats-gb-accent-blue);
    --blue-500: var(--synqats-gb-accent-blue);
    --blue-530: var(--synqats-gb-accent-blue);
    --blue-560: var(--synqats-gb-accent-blue);
    --blue-600: var(--synqats-gb-accent-blue);
    --blue-630: var(--synqats-gb-accent-blue);
    --blue-660: var(--synqats-gb-accent-blue);
    --blue-700: var(--synqats-gb-accent-blue);
    --blue-730: var(--synqats-gb-accent-blue);
    --blue-760: var(--synqats-gb-accent-blue);
    --blue-800: var(--synqats-gb-accent-blue);
    --blue-830: var(--synqats-gb-accent-blue);
    --blue-860: var(--synqats-gb-accent-blue);
    --blue-900: var(--synqats-gb-accent-blue);

    --black-100: var(--synqats-gb-bg-dim-dark);
    --black-130: var(--synqats-gb-bg-dim-dark);
    --black-160: var(--synqats-gb-bg-dim-dark);
    --black-200: var(--synqats-gb-bg-dim-dark);
    --black-230: var(--synqats-gb-bg-dim-dark);
    --black-260: var(--synqats-gb-bg-dim-dark);
    --black-300: var(--synqats-gb-bg-dim-dark);
    --black-330: var(--synqats-gb-bg-dim-dark);
    --black-345: var(--synqats-gb-bg-dim-dark);
    --black-360: var(--synqats-gb-bg-dim-dark);
    --black-400: var(--synqats-gb-bg-dim-dark);
    --black-430: var(--synqats-gb-bg-dim-dark);
    --black-460: var(--synqats-gb-bg-dim-dark);
    --black-500: var(--synqats-gb-bg-dim-dark);
    --black-530: var(--synqats-gb-bg-dim-dark);
    --black-560: var(--synqats-gb-bg-dim-dark);
    --black-600: var(--synqats-gb-bg-dim-dark);
    --black-630: var(--synqats-gb-bg-dim-dark);
    --black-660: var(--synqats-gb-bg-dim-dark);
    --black-700: var(--synqats-gb-bg-dim-dark);
    --black-730: var(--synqats-gb-bg-dim-dark);
    --black-760: var(--synqats-gb-bg-dim-dark);
    --black-800: var(--synqats-gb-bg-dim-dark);
    --black-830: var(--synqats-gb-bg-dim-dark);
    --black-860: var(--synqats-gb-bg-dim-dark);
    --black-900: var(--synqats-gb-bg-dim-dark);

    --red-100: var(--synqats-gb-accent-red);
    --red-130: var(--synqats-gb-accent-red);
    --red-160: var(--synqats-gb-accent-red);
    --red-200: var(--synqats-gb-accent-red);
    --red-230: var(--synqats-gb-accent-red);
    --red-260: var(--synqats-gb-accent-red);
    --red-300: var(--synqats-gb-accent-red);
    --red-330: var(--synqats-gb-accent-red);
    --red-345: var(--synqats-gb-accent-red);
    --red-360: var(--synqats-gb-accent-red);
    --red-400: var(--synqats-gb-accent-red);
    --red-430: var(--synqats-gb-accent-red);
    --red-460: var(--synqats-gb-accent-red);
    --red-500: var(--synqats-gb-accent-red);
    --red-530: var(--synqats-gb-accent-red);
    --red-560: var(--synqats-gb-accent-red);
    --red-600: var(--synqats-gb-accent-red);
    --red-630: var(--synqats-gb-accent-red);
    --red-660: var(--synqats-gb-accent-red);
    --red-700: var(--synqats-gb-accent-red);
    --red-730: var(--synqats-gb-accent-red);
    --red-760: var(--synqats-gb-accent-red);
    --red-800: var(--synqats-gb-accent-red);
    --red-830: var(--synqats-gb-accent-red);
    --red-860: var(--synqats-gb-accent-red);
    --red-900: var(--synqats-gb-accent-red);

    --white-100: var(--synqats-gb-bg-dim-light);
    --white-130: var(--synqats-gb-bg-dim-light);
    --white-160: var(--synqats-gb-bg-dim-light);
    --white-200: var(--synqats-gb-bg-dim-light);
    --white-230: var(--synqats-gb-bg-dim-light);
    --white-260: var(--synqats-gb-bg-dim-light);
    --white-300: var(--synqats-gb-bg-dim-light);
    --white-330: var(--synqats-gb-bg-dim-light);
    --white-345: var(--synqats-gb-bg-dim-light);
    --white-360: var(--synqats-gb-bg-dim-light);
    --white-400: var(--synqats-gb-bg-dim-light);
    --white-430: var(--synqats-gb-bg-dim-light);
    --white-460: var(--synqats-gb-bg-dim-light);
    --white-500: var(--synqats-gb-bg-dim-light);
    --white-530: var(--synqats-gb-bg-dim-light);
    --white-560: var(--synqats-gb-bg-dim-light);
    --white-600: var(--synqats-gb-bg-dim-light);
    --white-630: var(--synqats-gb-bg-dim-light);
    --white-660: var(--synqats-gb-bg-dim-light);
    --white-700: var(--synqats-gb-bg-dim-light);
    --white-730: var(--synqats-gb-bg-dim-light);
    --white-760: var(--synqats-gb-bg-dim-light);
    --white-800: var(--synqats-gb-bg-dim-light);
    --white-830: var(--synqats-gb-bg-dim-light);
    --white-860: var(--synqats-gb-bg-dim-light);
    --white-900: var(--synqats-gb-bg-dim-light);

    --yellow-100: var(--synqats-gb-accent-yellow);
    --yellow-130: var(--synqats-gb-accent-yellow);
    --yellow-160: var(--synqats-gb-accent-yellow);
    --yellow-200: var(--synqats-gb-accent-yellow);
    --yellow-230: var(--synqats-gb-accent-yellow);
    --yellow-260: var(--synqats-gb-accent-yellow);
    --yellow-300: var(--synqats-gb-accent-yellow);
    --yellow-330: var(--synqats-gb-accent-yellow);
    --yellow-345: var(--synqats-gb-accent-yellow);
    --yellow-360: var(--synqats-gb-accent-yellow);
    --yellow-400: var(--synqats-gb-accent-yellow);
    --yellow-430: var(--synqats-gb-accent-yellow);
    --yellow-460: var(--synqats-gb-accent-yellow);
    --yellow-500: var(--synqats-gb-accent-yellow);
    --yellow-530: var(--synqats-gb-accent-yellow);
    --yellow-560: var(--synqats-gb-accent-yellow);
    --yellow-600: var(--synqats-gb-accent-yellow);
    --yellow-630: var(--synqats-gb-accent-yellow);
    --yellow-660: var(--synqats-gb-accent-yellow);
    --yellow-700: var(--synqats-gb-accent-yellow);
    --yellow-730: var(--synqats-gb-accent-yellow);
    --yellow-760: var(--synqats-gb-accent-yellow);
    --yellow-800: var(--synqats-gb-accent-yellow);
    --yellow-830: var(--synqats-gb-accent-yellow);
    --yellow-860: var(--synqats-gb-accent-yellow);
    --yellow-900: var(--synqats-gb-accent-yellow);
  }
`