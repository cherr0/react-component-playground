import { css } from 'styled-components';

const defaultVariables = css`
  --white: #ffffff;
  --black: #000000;

  --gray-25: #fcfcfc;
  --gray-50: #fbfbfb;
  --gray-100: #f5f5f5;
  --gray-200: #e6e6e6;
  --gray-300: #cfcfcf;
  --gray-400: #9e9e9e;
  --gray-500: #7a7a7a;
  --gray-600: #676767;
  --gray-700: #545454;
  --gray-800: #393939;
  --gray-900: #1a1a1a;

  --error-25: #fffbfa;
  --error-50: #fef3f2;
  --error-100: #fee4e2;
  --error-200: #fecdca;
  --error-300: #fda29b;
  --error-400: #f97066;
  --error-500: #f04438;
  --error-600: #d92d20;
  --error-700: #b42318;
  --error-800: #912018;
  --error-900: #7a271a;

  --warning-25: #fffcf5;
  --warning-50: #fffaeb;
  --warning-100: #fef0c7;
  --warning-200: #fedf89;
  --warning-300: #fec84b;
  --warning-400: #fdb022;
  --warning-500: #f79009;
  --warning-600: #dc6803;
  --warning-700: #b54708;
  --warning-800: #93370d;
  --warning-900: #7a2e0e;

  --success-25: #f6fef9;
  --success-50: #ecfdf3;
  --success-100: #d1fadf;
  --success-200: #a6f4c5;
  --success-300: #6ce9a6;
  --success-400: #32d583;
  --success-500: #12b76a;
  --success-600: #039855;
  --success-700: #027a48;
  --success-800: #05603a;
  --success-900: #054f31;

  --information-25: #f5faff;
  --information-50: #eff8ff;
  --information-100: #d1e9ff;
  --information-200: #b2ddff;
  --information-300: #84caff;
  --information-400: #53b1fd;
  --information-500: #2e90fa;
  --information-600: #1570ef;
  --information-700: #175cd3;
  --information-800: #1849a9;
  --information-900: #19418;
`;

export const lightVariables = css`
  ${defaultVariables};

  --text-on-accent: rgba(255, 255, 255, 1);
  --text-weakest: #c0cdde;
  --text-weaker: #8e9aa8;
  --text-weak: #728192;
  --text-default: #515c68;
  --text-strong: #30363d;
  --text-accent: var(--success-400);
  --icon-on-accent: rgba(255, 255, 255, 1);
  --icon-weaker: #c0cdde;
  --icon-weak: #728192;
  --icon-default: #515c68;
  --icon-strong: #30363d;
  --button-default: rgba(255, 255, 255, 1);
  --button-disabled: rgba(255, 255, 255, 1);
  --button-hover: #ecf0f5;
  --button-focused: #ecf0f5;
  --accent-button-disabled: var(--gray-300);
  --accent-button-focused: var(--success-700);
  --accent-button-hover: var(--success-700);
  --accent-button-default: var(--success-400);
  --surface-raised: #f4f5f7;
  --surface-default: rgba(255, 255, 255, 1);
  --surface-floated: rgba(255, 255, 255, 1);
  --surface-active: #e2e8f0;
  --border-weak: #ecf0f5;
  --border-default: #e2e8f0;
  --border-strong: #687585;
  --border-accent: var(--success-400);
  --status-info-weak: #ebf0ff;
  --status-info-default: #2e5de8;
  --status-info-strong: #2448b5;
  --status-danger-weak: #fcebea;
  --status-danger-default: #e5322e;
  --status-danger-strong: #a32421;
  --status-warning-weak: #fffbec;
  --status-warning-default: #ffda3e;
  --status-warning-strong: #b59b2c;
  --status-success-weak: #e6f4ed;
  --status-success-default: #099149;
  --status-success-strong: #066734;
  --overlay-dimmed: rgba(0, 0, 0, 0.5);
  --overlay-sticky: rgba(255, 255, 255, 0.8);
  --background: rgba(255, 255, 255, 1);
`;

export const darkVariables = css`
  ${defaultVariables};
`;
