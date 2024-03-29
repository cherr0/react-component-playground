import { css } from 'styled-components';

const defaultVariables = css`
  --white: #ffffff;
  --black: #000000;

  --white-10: rgba(255, 255, 255, 0.1);
  --white-20: rgba(255, 255, 255, 0.2);
  --white-30: rgba(255, 255, 255, 0.3);
  --white-40: rgba(255, 255, 255, 0.4);
  --white-50: rgba(255, 255, 255, 0.5);
  --white-60: rgba(255, 255, 255, 0.6);
  --white-70: rgba(255, 255, 255, 0.7);
  --white-80: rgba(255, 255, 255, 0.8);
  --white-90: rgba(255, 255, 255, 0.9);
  --white-100: rgba(255, 255, 255, 1);

  --black-10: rgba(0, 0, 0, 0.1);
  --black-20: rgba(0, 0, 0, 0.2);
  --black-30: rgba(0, 0, 0, 0.3);
  --black-40: rgba(0, 0, 0, 0.4);
  --black-50: rgba(0, 0, 0, 0.5);
  --black-60: rgba(0, 0, 0, 0.6);
  --black-70: rgba(0, 0, 0, 0.7);
  --black-80: rgba(0, 0, 0, 0.8);
  --black-90: rgba(0, 0, 0, 0.9);
  --black-100: rgba(0, 0, 0, 1);

  --gray-25: #fcfcfc;
  --gray-50: #fafafa;
  --gray-100: #f5f5f5;
  --gray-200: #e6e6e6;
  --gray-300: #cfcfcf;
  --gray-400: #9e9e9e;
  --gray-500: #7a7a7a;
  --gray-600: #676767;
  --gray-700: #545454;
  --gray-800: #393939;
  --gray-900: #1a1a1a;

  --blue-gray-25: #fcfdfd;
  --blue-gray-50: #f4f5f7;
  --blue-gray-100: #ecf0f5;
  --blue-gray-200: #e2e8f0;
  --blue-gray-300: #c0cdde;
  --blue-gray-400: #8e9aa8;
  --blue-gray-500: #666d77;
  --blue-gray-600: #4c5561;
  --blue-gray-700: #333d4a;
  --blue-gray-800: #1a1f26;
  --blue-gray-900: #00050d;

  --navy-25: #fbfcfd;
  --navy-50: #e6ebf3;
  --navy-100: #c0cde1;
  --navy-200: #a1b5d2;
  --navy-300: #7693bd;
  --navy-400: #335e9d;
  --navy-500: #003684;
  --navy-600: #003178;
  --navy-700: #00265e;
  --navy-800: #001e49;
  --navy-900: #001737;

  --blue-25: #f7f9ff;
  --blue-50: #ebf0ff;
  --blue-100: #c0d0ff;
  --blue-200: #a1b9ff;
  --blue-300: #7698ff;
  --blue-400: #5c85ff;
  --blue-500: #3366ff;
  --blue-600: #2e5de8;
  --blue-700: #2448b5;
  --blue-800: #1c388c;
  --blue-900: #152b6b;

  --red-25: #fffafa;
  --red-50: #fcebea;
  --red-100: #f7bfbe;
  --red-200: #f3a19f;
  --red-300: #ee7673;
  --red-400: #ea5b58;
  --red-500: #e5322e;
  --red-600: #d02e2a;
  --red-700: #a32421;
  --red-800: #7e1c19;
  --red-900: #601513;

  --yellow-25: #fffdf7;
  --yellow-50: #fffbec;
  --yellow-100: #fff4c3;
  --yellow-200: #ffeea6;
  --yellow-300: #ffe67e;
  --yellow-400: #ffe165;
  --yellow-500: #ffda3e;
  --yellow-600: #e8c638;
  --yellow-700: #b59b2c;
  --yellow-800: #8c7822;
  --yellow-900: #6b5c1a;

  --green-25: #eff4f2;
  --green-50: #e6f4ed;
  --green-100: #b3ddc7;
  --green-200: #8eccab;
  --green-300: #5ab585;
  --green-400: #3aa76d;
  --green-500: #099149;
  --green-600: #088442;
  --green-700: #066734;
  --green-800: #055028;
  --green-900: #043d1f;

  --font-families-pretendard: Pretendard;
  --line-heights-0: 18;
  --line-heights-1: 20;
  --line-heights-2: 24;
  --line-heights-3: 28;
  --line-heights-4: 30;
  --line-heights-5: 32;
  --line-heights-6: 38;
  --line-heights-7: 48;
  --line-heights-8: 60;
  --line-heights-9: 72;
  --line-heights-10: 90;

  --font-weights-pretendard-0: Light;
  --font-weights-pretendard-1: Regular;
  --font-weights-pretendard-2: Medium;
  --font-weights-pretendard-3: Bold;
  --font-weights-pretendard-4: Black;

  --font-weights-regular: 400;
  --font-weights-medium: 500;
  --font-weights-bold: 700;

  --font-size-0: 12;
  --font-size-1: 14;
  --font-size-2: 16;
  --font-size-3: 18;
  --font-size-4: 20;
  --font-size-5: 24;
  --font-size-6: 30;
  --font-size-7: 36;
  --font-size-8: 48;
  --font-size-9: 60;
  --font-size-10: 72;

  --letter-spacing-0: 0%;
  --letter-spacing-1: -2%;

  --paragraph-spacing-0: 12;
  --paragraph-spacing-1: 14;
  --paragraph-spacing-2: 16;
  --paragraph-spacing-3: 18;
  --paragraph-spacing-4: 20;
  --paragraph-spacing-5: 24;
  --paragraph-spacing-6: 30;
  --paragraph-spacing-7: 36;
  --paragraph-spacing-8: 48;
  --paragraph-spacing-9: 60;

  --text-xl-light-font-family: Pretendard;
  --text-xl-light-font-weight: Light;
  --text-xl-light-line-height: 30;
  --text-xl-light-font-size: 20;
  --text-xl-light-letter-spacing: 0%;
  --text-xl-light-paragraph-spacing: 20;
  --text-xl-light-text-case: none;
  --text-xl-light-text-decoration: none;
  --text-xl-regular-font-family: Pretendard;
  --text-xl-regular-font-weight: Regular;
  --text-xl-regular-line-height: 30;
  --text-xl-regular-font-size: 20;
  --text-xl-regular-letter-spacing: 0%;
  --text-xl-regular-paragraph-spacing: 20;
  --text-xl-regular-text-case: none;
  --text-xl-regular-text-decoration: none;
  --text-xl-medium-font-family: Pretendard;
  --text-xl-medium-font-weight: Medium;
  --text-xl-medium-line-height: 30;
  --text-xl-medium-font-size: 20;
  --text-xl-medium-letter-spacing: 0%;
  --text-xl-medium-paragraph-spacing: 20;
  --text-xl-medium-text-case: none;
  --text-xl-medium-text-decoration: none;
  --text-xl-bold-font-family: Pretendard;
  --text-xl-bold-font-weight: Bold;
  --text-xl-bold-line-height: 30;
  --text-xl-bold-font-size: 20;
  --text-xl-bold-letter-spacing: 0%;
  --text-xl-bold-paragraph-spacing: 20;
  --text-xl-bold-text-case: none;
  --text-xl-bold-text-decoration: none;
  --text-xl-black-font-family: Pretendard;
  --text-xl-black-font-weight: Black;
  --text-xl-black-line-height: 30;
  --text-xl-black-font-size: 20;
  --text-xl-black-letter-spacing: 0%;
  --text-xl-black-paragraph-spacing: 20;
  --text-xl-black-text-case: none;
  --text-xl-black-text-decoration: none;
  --text-lg-light-font-family: Pretendard;
  --text-lg-light-font-weight: Light;
  --text-lg-light-line-height: 20;
  --text-lg-light-font-size: 18;
  --text-lg-light-letter-spacing: 0%;
  --text-lg-light-paragraph-spacing: 18;
  --text-lg-light-text-case: none;
  --text-lg-light-text-decoration: none;
  --text-lg-regular-font-family: Pretendard;
  --text-lg-regular-font-weight: Regular;
  --text-lg-regular-line-height: 28;
  --text-lg-regular-font-size: 18;
  --text-lg-regular-letter-spacing: 0%;
  --text-lg-regular-paragraph-spacing: 18;
  --text-lg-regular-text-case: none;
  --text-lg-regular-text-decoration: none;
  --text-lg-medium-font-family: Pretendard;
  --text-lg-medium-font-weight: Medium;
  --text-lg-medium-line-height: 28;
  --text-lg-medium-font-size: 18;
  --text-lg-medium-letter-spacing: 0%;
  --text-lg-medium-paragraph-spacing: 18;
  --text-lg-medium-text-case: none;
  --text-lg-medium-text-decoration: none;
  --text-lg-bold-font-family: Pretendard;
  --text-lg-bold-font-weight: Bold;
  --text-lg-bold-line-height: 28;
  --text-lg-bold-font-size: 18;
  --text-lg-bold-letter-spacing: 0%;
  --text-lg-bold-paragraph-spacing: 18;
  --text-lg-bold-text-case: none;
  --text-lg-bold-text-decoration: none;
  --text-lg-black-font-family: Pretendard;
  --text-lg-black-font-weight: Black;
  --text-lg-black-line-height: 28;
  --text-lg-black-font-size: 18;
  --text-lg-black-letter-spacing: 0%;
  --text-lg-black-paragraph-spacing: 18;
  --text-lg-black-text-case: none;
  --text-lg-black-text-decoration: none;
  --text-md-light-font-family: Pretendard;
  --text-md-light-font-weight: Light;
  --text-md-light-line-height: 24;
  --text-md-light-font-size: 16;
  --text-md-light-letter-spacing: 0%;
  --text-md-light-paragraph-spacing: 16;
  --text-md-light-text-case: none;
  --text-md-light-text-decoration: none;
  --text-md-regular-font-family: Pretendard;
  --text-md-regular-font-weight: Regular;
  --text-md-regular-line-height: 24;
  --text-md-regular-font-size: 16;
  --text-md-regular-letter-spacing: 0%;
  --text-md-regular-paragraph-spacing: 16;
  --text-md-regular-text-case: none;
  --text-md-regular-text-decoration: none;
  --text-md-medium-font-family: Pretendard;
  --text-md-medium-font-weight: Medium;
  --text-md-medium-line-height: 24;
  --text-md-medium-font-size: 16;
  --text-md-medium-letter-spacing: 0%;
  --text-md-medium-paragraph-spacing: 16;
  --text-md-medium-text-case: none;
  --text-md-medium-text-decoration: none;
  --text-md-bold-font-family: Pretendard;
  --text-md-bold-font-weight: Bold;
  --text-md-bold-line-height: 24;
  --text-md-bold-font-size: 16;
  --text-md-bold-letter-spacing: 0%;
  --text-md-bold-paragraph-spacing: 16;
  --text-md-bold-text-case: none;
  --text-md-bold-text-decoration: none;
  --text-md-black-font-family: Pretendard;
  --text-md-black-font-weight: Black;
  --text-md-black-line-height: 24;
  --text-md-black-font-size: 16;
  --text-md-black-letter-spacing: 0%;
  --text-md-black-paragraph-spacing: 16;
  --text-md-black-text-case: none;
  --text-md-black-text-decoration: none;
  --text-sm-light-font-family: Pretendard;
  --text-sm-light-font-weight: Light;
  --text-sm-light-line-height: 20;
  --text-sm-light-font-size: 14;
  --text-sm-light-letter-spacing: 0%;
  --text-sm-light-paragraph-spacing: 14;
  --text-sm-light-text-case: none;
  --text-sm-light-text-decoration: none;
  --text-sm-regular-font-family: Pretendard;
  --text-sm-regular-font-weight: Regular;
  --text-sm-regular-line-height: 20;
  --text-sm-regular-font-size: 14;
  --text-sm-regular-letter-spacing: 0%;
  --text-sm-regular-paragraph-spacing: 14;
  --text-sm-regular-text-case: none;
  --text-sm-regular-text-decoration: none;
  --text-sm-medium-font-family: Pretendard;
  --text-sm-medium-font-weight: Medium;
  --text-sm-medium-line-height: 20;
  --text-sm-medium-font-size: 14;
  --text-sm-medium-letter-spacing: 0%;
  --text-sm-medium-paragraph-spacing: 14;
  --text-sm-medium-text-case: none;
  --text-sm-medium-text-decoration: none;
  --text-sm-bold-font-family: Pretendard;
  --text-sm-bold-font-weight: Bold;
  --text-sm-bold-line-height: 20;
  --text-sm-bold-font-size: 14;
  --text-sm-bold-letter-spacing: 0%;
  --text-sm-bold-paragraph-spacing: 14;
  --text-sm-bold-text-case: none;
  --text-sm-bold-text-decoration: none;
  --text-sm-black-font-family: Pretendard;
  --text-sm-black-font-weight: Black;
  --text-sm-black-line-height: 20;
  --text-sm-black-font-size: 14;
  --text-sm-black-letter-spacing: 0%;
  --text-sm-black-paragraph-spacing: 14;
  --text-sm-black-text-case: none;
  --text-sm-black-text-decoration: none;
  --text-xs-light-font-family: Pretendard;
  --text-xs-light-font-weight: Light;
  --text-xs-light-line-height: 18;
  --text-xs-light-font-size: 12;
  --text-xs-light-letter-spacing: 0%;
  --text-xs-light-paragraph-spacing: 12;
  --text-xs-light-text-case: none;
  --text-xs-light-text-decoration: none;
  --text-xs-regular-font-family: Pretendard;
  --text-xs-regular-font-weight: Regular;
  --text-xs-regular-line-height: 18;
  --text-xs-regular-font-size: 12;
  --text-xs-regular-letter-spacing: 0%;
  --text-xs-regular-paragraph-spacing: 12;
  --text-xs-regular-text-case: none;
  --text-xs-regular-text-decoration: none;
  --text-xs-medium-font-family: Pretendard;
  --text-xs-medium-font-weight: Medium;
  --text-xs-medium-line-height: 18;
  --text-xs-medium-font-size: 12;
  --text-xs-medium-letter-spacing: 0%;
  --text-xs-medium-paragraph-spacing: 12;
  --text-xs-medium-text-case: none;
  --text-xs-medium-text-decoration: none;
  --text-xs-bold-font-family: Pretendard;
  --text-xs-bold-font-weight: Bold;
  --text-xs-bold-line-height: 18;
  --text-xs-bold-font-size: 12;
  --text-xs-bold-letter-spacing: 0%;
  --text-xs-bold-paragraph-spacing: 12;
  --text-xs-bold-text-case: none;
  --text-xs-bold-text-decoration: none;
  --text-xs-black-font-family: Pretendard;
  --text-xs-black-font-weight: Black;
  --text-xs-black-line-height: 18;
  --text-xs-black-font-size: 12;
  --text-xs-black-letter-spacing: 0%;
  --text-xs-black-paragraph-spacing: 12;
  --text-xs-black-text-case: none;
  --text-xs-black-text-decoration: none;
  --display-2xl-light-font-family: Pretendard;
  --display-2xl-light-font-weight: Light;
  --display-2xl-light-line-height: 90;
  --display-2xl-light-font-size: 72;
  --display-2xl-light-letter-spacing: -2%;
  --display-2xl-light-paragraph-spacing: 60;
  --display-2xl-light-text-case: none;
  --display-2xl-light-text-decoration: none;
  --display-2xl-regular-font-family: Pretendard;
  --display-2xl-regular-font-weight: Regular;
  --display-2xl-regular-line-height: 90;
  --display-2xl-regular-font-size: 72;
  --display-2xl-regular-letter-spacing: -2%;
  --display-2xl-regular-paragraph-spacing: 60;
  --display-2xl-regular-text-case: none;
  --display-2xl-regular-text-decoration: none;
  --display-2xl-medium-font-family: Pretendard;
  --display-2xl-medium-font-weight: Medium;
  --display-2xl-medium-line-height: 90;
  --display-2xl-medium-font-size: 72;
  --display-2xl-medium-letter-spacing: -2%;
  --display-2xl-medium-paragraph-spacing: 60;
  --display-2xl-medium-text-case: none;
  --display-2xl-medium-text-decoration: none;
  --display-2xl-bold-font-family: Pretendard;
  --display-2xl-bold-font-weight: Bold;
  --display-2xl-bold-line-height: 90;
  --display-2xl-bold-font-size: 72;
  --display-2xl-bold-letter-spacing: -2%;
  --display-2xl-bold-paragraph-spacing: 60;
  --display-2xl-bold-text-case: none;
  --display-2xl-bold-text-decoration: none;
  --display-2xl-black-font-family: Pretendard;
  --display-2xl-black-font-weight: Black;
  --display-2xl-black-line-height: 90;
  --display-2xl-black-font-size: 72;
  --display-2xl-black-letter-spacing: -2%;
  --display-2xl-black-paragraph-spacing: 60;
  --display-2xl-black-text-case: none;
  --display-2xl-black-text-decoration: none;
  --display-xl-light-font-family: Pretendard;
  --display-xl-light-font-weight: Light;
  --display-xl-light-line-height: 72;
  --display-xl-light-font-size: 60;
  --display-xl-light-letter-spacing: -2%;
  --display-xl-light-paragraph-spacing: 60;
  --display-xl-light-text-case: none;
  --display-xl-light-text-decoration: none;
  --display-xl-regular-font-family: Pretendard;
  --display-xl-regular-font-weight: Light;
  --display-xl-regular-line-height: 72;
  --display-xl-regular-font-size: 60;
  --display-xl-regular-letter-spacing: -2%;
  --display-xl-regular-paragraph-spacing: 60;
  --display-xl-regular-text-case: none;
  --display-xl-regular-text-decoration: none;
  --display-xl-medium-font-family: Pretendard;
  --display-xl-medium-font-weight: Medium;
  --display-xl-medium-line-height: 72;
  --display-xl-medium-font-size: 60;
  --display-xl-medium-letter-spacing: -2%;
  --display-xl-medium-paragraph-spacing: 60;
  --display-xl-medium-text-case: none;
  --display-xl-medium-text-decoration: none;
  --display-xl-bold-font-family: Pretendard;
  --display-xl-bold-font-weight: Bold;
  --display-xl-bold-line-height: 72;
  --display-xl-bold-font-size: 60;
  --display-xl-bold-letter-spacing: -2%;
  --display-xl-bold-paragraph-spacing: 60;
  --display-xl-bold-text-case: none;
  --display-xl-bold-text-decoration: none;
  --display-xl-black-font-family: Pretendard;
  --display-xl-black-font-weight: Black;
  --display-xl-black-line-height: 72;
  --display-xl-black-font-size: 60;
  --display-xl-black-letter-spacing: -2%;
  --display-xl-black-paragraph-spacing: 60;
  --display-xl-black-text-case: none;
  --display-xl-black-text-decoration: none;
  --display-lg-light-font-family: Pretendard;
  --display-lg-light-font-weight: Light;
  --display-lg-light-line-height: 60;
  --display-lg-light-font-size: 48;
  --display-lg-light-letter-spacing: -2%;
  --display-lg-light-paragraph-spacing: 48;
  --display-lg-light-text-case: none;
  --display-lg-light-text-decoration: none;
  --display-lg-regular-font-family: Pretendard;
  --display-lg-regular-font-weight: Regular;
  --display-lg-regular-line-height: 60;
  --display-lg-regular-font-size: 48;
  --display-lg-regular-letter-spacing: -2%;
  --display-lg-regular-paragraph-spacing: 48;
  --display-lg-regular-text-case: none;
  --display-lg-regular-text-decoration: none;
  --display-lg-medium-font-family: Pretendard;
  --display-lg-medium-font-weight: Medium;
  --display-lg-medium-line-height: 60;
  --display-lg-medium-font-size: 48;
  --display-lg-medium-letter-spacing: -2%;
  --display-lg-medium-paragraph-spacing: 48;
  --display-lg-medium-text-case: none;
  --display-lg-medium-text-decoration: none;
  --display-lg-bold-font-family: Pretendard;
  --display-lg-bold-font-weight: Bold;
  --display-lg-bold-line-height: 60;
  --display-lg-bold-font-size: 48;
  --display-lg-bold-letter-spacing: -2%;
  --display-lg-bold-paragraph-spacing: 48;
  --display-lg-bold-text-case: none;
  --display-lg-bold-text-decoration: none;
  --display-lg-black-font-family: Pretendard;
  --display-lg-black-font-weight: Black;
  --display-lg-black-line-height: 60;
  --display-lg-black-font-size: 48;
  --display-lg-black-letter-spacing: -2%;
  --display-lg-black-paragraph-spacing: 48;
  --display-lg-black-text-case: none;
  --display-lg-black-text-decoration: none;
  --display-md-light-font-family: Pretendard;
  --display-md-light-font-weight: Light;
  --display-md-light-line-height: 48;
  --display-md-light-font-size: 36;
  --display-md-light-letter-spacing: -2%;
  --display-md-light-paragraph-spacing: 36;
  --display-md-light-text-case: none;
  --display-md-light-text-decoration: none;
  --display-md-regular-font-family: Pretendard;
  --display-md-regular-font-weight: Regular;
  --display-md-regular-line-height: 48;
  --display-md-regular-font-size: 36;
  --display-md-regular-letter-spacing: -2%;
  --display-md-regular-paragraph-spacing: 36;
  --display-md-regular-text-case: none;
  --display-md-regular-text-decoration: none;
  --display-md-medium-font-family: Pretendard;
  --display-md-medium-font-weight: Medium;
  --display-md-medium-line-height: 48;
  --display-md-medium-font-size: 36;
  --display-md-medium-letter-spacing: -2%;
  --display-md-medium-paragraph-spacing: 36;
  --display-md-medium-text-case: none;
  --display-md-medium-text-decoration: none;
  --display-md-bold-font-family: Pretendard;
  --display-md-bold-font-weight: Bold;
  --display-md-bold-line-height: 48;
  --display-md-bold-font-size: 36;
  --display-md-bold-letter-spacing: -2%;
  --display-md-bold-paragraph-spacing: 36;
  --display-md-bold-text-case: none;
  --display-md-bold-text-decoration: none;
  --display-md-black-font-family: Pretendard;
  --display-md-black-font-weight: Black;
  --display-md-black-line-height: 48;
  --display-md-black-font-size: 36;
  --display-md-black-letter-spacing: -2%;
  --display-md-black-paragraph-spacing: 36;
  --display-md-black-text-case: none;
  --display-md-black-text-decoration: none;
  --display-sm-light-font-family: Pretendard;
  --display-sm-light-font-weight: Light;
  --display-sm-light-line-height: 38;
  --display-sm-light-font-size: 30;
  --display-sm-light-letter-spacing: 0%;
  --display-sm-light-paragraph-spacing: 30;
  --display-sm-light-text-case: none;
  --display-sm-light-text-decoration: none;
  --display-sm-regular-font-family: Pretendard;
  --display-sm-regular-font-weight: Regular;
  --display-sm-regular-line-height: 38;
  --display-sm-regular-font-size: 30;
  --display-sm-regular-letter-spacing: 0%;
  --display-sm-regular-paragraph-spacing: 30;
  --display-sm-regular-text-case: none;
  --display-sm-regular-text-decoration: none;
  --display-sm-medium-font-family: Pretendard;
  --display-sm-medium-font-weight: Medium;
  --display-sm-medium-line-height: 38;
  --display-sm-medium-font-size: 30;
  --display-sm-medium-letter-spacing: 0%;
  --display-sm-medium-paragraph-spacing: 30;
  --display-sm-medium-text-case: none;
  --display-sm-medium-text-decoration: none;
  --display-sm-bold-font-family: Pretendard;
  --display-sm-bold-font-weight: Bold;
  --display-sm-bold-line-height: 38;
  --display-sm-bold-font-size: 30;
  --display-sm-bold-letter-spacing: 0%;
  --display-sm-bold-paragraph-spacing: 30;
  --display-sm-bold-text-case: none;
  --display-sm-bold-text-decoration: none;
  --display-sm-black-font-family: Pretendard;
  --display-sm-black-font-weight: Black;
  --display-sm-black-line-height: 38;
  --display-sm-black-font-size: 30;
  --display-sm-black-letter-spacing: 0%;
  --display-sm-black-paragraph-spacing: 30;
  --display-sm-black-text-case: none;
  --display-sm-black-text-decoration: none;
  --display-xs-light-font-family: Pretendard;
  --display-xs-light-font-weight: Light;
  --display-xs-light-line-height: 32;
  --display-xs-light-font-size: 24;
  --display-xs-light-letter-spacing: 0%;
  --display-xs-light-paragraph-spacing: 24;
  --display-xs-light-text-case: none;
  --display-xs-light-text-decoration: none;
  --display-xs-regular-font-family: Pretendard;
  --display-xs-regular-font-weight: Regular;
  --display-xs-regular-line-height: 32;
  --display-xs-regular-font-size: 24;
  --display-xs-regular-letter-spacing: 0%;
  --display-xs-regular-paragraph-spacing: 24;
  --display-xs-regular-text-case: none;
  --display-xs-regular-text-decoration: none;
  --display-xs-medium-font-family: Pretendard;
  --display-xs-medium-font-weight: Medium;
  --display-xs-medium-line-height: 32;
  --display-xs-medium-font-size: 24;
  --display-xs-medium-letter-spacing: 0%;
  --display-xs-medium-paragraph-spacing: 24;
  --display-xs-medium-text-case: none;
  --display-xs-medium-text-decoration: none;
  --display-xs-bold-font-family: Pretendard;
  --display-xs-bold-font-weight: Bold;
  --display-xs-bold-line-height: 32;
  --display-xs-bold-font-size: 24;
  --display-xs-bold-letter-spacing: 0%;
  --display-xs-bold-paragraph-spacing: 24;
  --display-xs-bold-text-case: none;
  --display-xs-bold-text-decoration: none;
  --display-xs-black-font-family: Pretendard;
  --display-xs-black-font-weight: Black;
  --display-xs-black-line-height: 32;
  --display-xs-black-font-size: 24;
  --display-xs-black-letter-spacing: 0%;
  --display-xs-black-paragraph-spacing: 24;
  --display-xs-black-text-case: none;
  --display-xs-black-text-decoration: none;

  --text-case-none: none;
  --text-decoration-none: none;
  --text-decoration-underline: underline;
  --shadow-xs-color: #1a1a1a0d;
  --shadow-xs-type: dropShadow;
  --shadow-xs-x: 0;
  --shadow-xs-y: 1;
  --shadow-xs-blur: 2;
  --shadow-xs-spread: 0;
  --shadow-sm-0-color: #1a1a1a0f;
  --shadow-sm-0-type: dropShadow;
  --shadow-sm-0-x: 0;
  --shadow-sm-0-y: 1;
  --shadow-sm-0-blur: 2;
  --shadow-sm-0-spread: 0;
  --shadow-sm-1-color: #1a1a1a1a;
  --shadow-sm-1-type: dropShadow;
  --shadow-sm-1-x: 0;
  --shadow-sm-1-y: 1;
  --shadow-sm-1-blur: 3;
  --shadow-sm-1-spread: 0;
  --shadow-md-0-color: #1a1a1a0f;
  --shadow-md-0-type: dropShadow;
  --shadow-md-0-x: 0;
  --shadow-md-0-y: 2;
  --shadow-md-0-blur: 4;
  --shadow-md-0-spread: -2;
  --shadow-md-1-color: #1a1a1a1a;
  --shadow-md-1-type: dropShadow;
  --shadow-md-1-x: 0;
  --shadow-md-1-y: 4;
  --shadow-md-1-blur: 8;
  --shadow-md-1-spread: -2;
  --shadow-lg-0-color: #1a1a1a0d;
  --shadow-lg-0-type: dropShadow;
  --shadow-lg-0-x: 0;
  --shadow-lg-0-y: 4;
  --shadow-lg-0-blur: 6;
  --shadow-lg-0-spread: -2;
  --shadow-lg-1-color: #1a1a1a1a;
  --shadow-lg-1-type: dropShadow;
  --shadow-lg-1-x: 0;
  --shadow-lg-1-y: 12;
  --shadow-lg-1-blur: 16;
  --shadow-lg-1-spread: -4;
  --shadow-xl-0-color: #1a1a1a0a;
  --shadow-xl-0-type: dropShadow;
  --shadow-xl-0-x: 0;
  --shadow-xl-0-y: 8;
  --shadow-xl-0-blur: 8;
  --shadow-xl-0-spread: -4;
  --shadow-xl-1-color: #1a1a1a1a;
  --shadow-xl-1-type: dropShadow;
  --shadow-xl-1-x: 0;
  --shadow-xl-1-y: 20;
  --shadow-xl-1-blur: 24;
  --shadow-xl-1-spread: -4;
  --shadow-xxl-color: #1a1a1a40;
  --shadow-xxl-type: dropShadow;
  --shadow-xxl-x: 0;
  --shadow-xxl-y: 24;
  --shadow-xxl-blur: 48;
  --shadow-xxl-spread: -12;
  --shadow-xxxl-color: #1a1a1a33;
  --shadow-xxxl-type: dropShadow;
  --shadow-xxxl-x: 0;
  --shadow-xxxl-y: 32;
  --shadow-xxxl-blur: 64;
  --shadow-xxxl-spread: -12;
  --display-1-font-family: Pretendard;
  --display-1-font-weight: 700;
  --display-1-line-height: 72;
  --display-1-font-size: 60;
  --display-1-letter-spacing: -2%;
  --display-1-paragraph-spacing: 60;
  --display-1-text-case: none;
  --display-1-text-decoration: none;
  --display-2-font-family: Pretendard;
  --display-2-font-weight: 700;
  --display-2-line-height: 60;
  --display-2-font-size: 48;
  --display-2-letter-spacing: -2%;
  --display-2-paragraph-spacing: 48;
  --display-2-text-case: none;
  --display-2-text-decoration: none;
  --display-3-font-family: Pretendard;
  --display-3-font-weight: 700;
  --display-3-line-height: 48;
  --display-3-font-size: 36;
  --display-3-letter-spacing: -2%;
  --display-3-paragraph-spacing: 36;
  --display-3-text-case: none;
  --display-3-text-decoration: none;
  --display-4-font-family: Pretendard;
  --display-4-font-weight: 700;
  --display-4-line-height: 38;
  --display-4-font-size: 30;
  --display-4-letter-spacing: -2%;
  --display-4-paragraph-spacing: 30;
  --display-4-text-case: none;
  --display-4-text-decoration: none;
  --headline-strong-font-family: Pretendard;
  --headline-strong-font-weight: 700;
  --headline-strong-line-height: 32;
  --headline-strong-font-size: 24;
  --headline-strong-letter-spacing: 0%;
  --headline-strong-paragraph-spacing: 24;
  --headline-strong-text-case: none;
  --headline-strong-text-decoration: none;
  --headline-font-family: Pretendard;
  --headline-font-weight: 500;
  --headline-line-height: 32;
  --headline-font-size: 24;
  --headline-letter-spacing: 0%;
  --headline-paragraph-spacing: 24;
  --headline-text-case: none;
  --headline-text-decoration: none;
  --title-strong-font-family: Pretendard;
  --title-strong-font-weight: 700;
  --title-strong-line-height: 28;
  --title-strong-font-size: 18;
  --title-strong-letter-spacing: 0%;
  --title-strong-paragraph-spacing: 18;
  --title-strong-text-case: none;
  --title-strong-text-decoration: none;
  --title-font-family: Pretendard;
  --title-font-weight: 500;
  --title-line-height: 28;
  --title-font-size: 18;
  --title-letter-spacing: 0%;
  --title-paragraph-spacing: 18;
  --title-text-case: none;
  --title-text-decoration: none;
  --subtitle-strong-font-family: Pretendard;
  --subtitle-strong-font-weight: 700;
  --subtitle-strong-line-height: 24;
  --subtitle-strong-font-size: 16;
  --subtitle-strong-letter-spacing: 0%;
  --subtitle-strong-paragraph-spacing: 16;
  --subtitle-strong-text-case: none;
  --subtitle-strong-text-decoration: none;
  --subtitle-font-family: Pretendard;
  --subtitle-font-weight: 500;
  --subtitle-line-height: 24;
  --subtitle-font-size: 16;
  --subtitle-letter-spacing: 0%;
  --subtitle-paragraph-spacing: 16;
  --subtitle-text-case: none;
  --subtitle-text-decoration: none;
  --body-strong-font-family: Pretendard;
  --body-strong-font-weight: 500;
  --body-strong-line-height: 20;
  --body-strong-font-size: 14;
  --body-strong-letter-spacing: 0%;
  --body-strong-paragraph-spacing: 14;
  --body-strong-text-case: none;
  --body-strong-text-decoration: none;
  --body-font-family: Pretendard;
  --body-font-weight: 400;
  --body-line-height: 20;
  --body-font-size: 14;
  --body-letter-spacing: 0%;
  --body-paragraph-spacing: 14;
  --body-text-case: none;
  --body-text-decoration: none;
  --button-l-font-family: Pretendard;
  --button-l-font-weight: 500;
  --button-l-line-height: 24;
  --button-l-font-size: 16;
  --button-l-letter-spacing: 0%;
  --button-l-paragraph-spacing: 16;
  --button-l-text-case: none;
  --button-l-text-decoration: none;
  --button-m-font-family: Pretendard;
  --button-m-font-weight: 500;
  --button-m-line-height: 20;
  --button-m-font-size: 14;
  --button-m-letter-spacing: 0%;
  --button-m-paragraph-spacing: 14;
  --button-m-text-case: none;
  --button-m-text-decoration: none;
  --caption-strong-font-family: Pretendard;
  --caption-strong-font-weight: 500;
  --caption-strong-line-height: 18;
  --caption-strong-font-size: 12;
  --caption-strong-letter-spacing: 0%;
  --caption-strong-paragraph-spacing: 12;
  --caption-strong-text-case: none;
  --caption-strong-text-decoration: none;
  --caption-font-family: Pretendard;
  --caption-font-weight: 400;
  --caption-line-height: 18;
  --caption-font-size: 12;
  --caption-letter-spacing: 0%;
  --caption-paragraph-spacing: 12;
  --caption-text-case: none;
  --caption-text-decoration: none;
  --textfield-strong-font-family: Pretendard;
  --textfield-strong-font-weight: 700;
  --textfield-strong-line-height: 24;
  --textfield-strong-font-size: 16;
  --textfield-strong-letter-spacing: 0%;
  --textfield-strong-paragraph-spacing: 16;
  --textfield-strong-text-decoration: none;
  --textfield-strong-text-case: none;
  --textfield-font-family: Pretendard;
  --textfield-font-weight: 400;
  --textfield-line-height: 24;
  --textfield-font-size: 16;
  --textfield-letter-spacing: 0%;
  --textfield-paragraph-spacing: 16;
  --textfield-text-decoration: none;
  --textfield-text-case: none;
  --link-m-font-family: Pretendard;
  --link-m-font-weight: 500;
  --link-m-line-height: 20;
  --link-m-font-size: 14;
  --link-m-letter-spacing: 0%;
  --link-m-paragraph-spacing: 14;
  --link-m-text-decoration: underline;
  --link-m-text-case: none;
  --link-l-font-family: Pretendard;
  --link-l-font-weight: 500;
  --link-l-line-height: 24;
  --link-l-font-size: 16;
  --link-l-letter-spacing: 0%;
  --link-l-paragraph-spacing: 16;
  --link-l-text-decoration: underline;
  --link-l-text-case: none;
  --body-stronger-font-family: Pretendard;
  --body-stronger-font-weight: 700;
  --body-stronger-line-height: 20;
  --body-stronger-font-size: 14;
  --body-stronger-letter-spacing: 0%;
  --body-stronger-paragraph-spacing: 14;
  --body-stronger-text-decoration: none;
  --body-stronger-text-case: none;
`;

export const lightVariables = css`
  ${defaultVariables};

  --text-on-accent: rgba(255, 255, 255, 1);
  --text-weakest: #c0cdde;
  --text-weaker: #8e9aa8;
  --text-weak: #666d77;
  --text-default: #333d4a;
  --text-strong: #00050d;
  --text-accent: #003684;
  --icon-on-accent: rgba(255, 255, 255, 1);
  --icon-weaker: #c0cdde;
  --icon-weak: #666d77;
  --icon-default: #333d4a;
  --icon-strong: #00050d;
  --button-default: rgba(255, 255, 255, 1);
  --button-disabled: rgba(255, 255, 255, 1);
  --button-hover: #ecf0f5;
  --button-focused: #ecf0f5;
  --accent-button-disabled: #7693bd;
  --accent-button-focused: #00265e;
  --accent-button-hover: #00265e;
  --accent-button-default: #003684;
  --surface-default: rgba(255, 255, 255, 1);
  --surface-floated: rgba(255, 255, 255, 1);
  --surface-background: rgba(255, 255, 255, 1);
  --border-weak: #ecf0f5;
  --border-default: #e2e8f0;
  --border-strong: #4c5561;
  --border-accent: #003684;
  --status-info-weak: #f4f5f7;
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
  --status-neutral-strong: #8e9aa8;
  --status-neutral-default: #e2e8f0;
  --status-neutral-weak: #f4f5f7;
  --overlay-dimmed: rgba(0, 0, 0, 0.5);
  --overlay-sticky: rgba(255, 255, 255, 0.8);
  --gradient-vertical: linear-gradient(0deg, #ffffff 0%, #ffffff00 100%);
  --gradient-horizontal: linear-gradient(-90deg, #ffffff 0%, #ffffff00 100%);
`;

export const darkVariables = css`
  ${defaultVariables};

  --text-on-accent: #fcfdfd;
  --text-weakest: #666d77;
  --text-weaker: #8e9aa8;
  --text-weak: #c0cdde;
  --text-default: #e2e8f0;
  --text-strong: #fcfdfd;
  --text-accent: #003684;
  --icon-on-accent: #fcfdfd;
  --icon-weaker: #666d77;
  --icon-weak: #c0cdde;
  --icon-default: #e2e8f0;
  --icon-strong: #fcfdfd;
  --button-default: #333d4a;
  --button-disabled: #333d4a;
  --button-hover: #4c5561;
  --button-focused: #666d77;
  --accent-button-disabled: #001e49;
  --accent-button-focused: #00265e;
  --accent-button-hover: #00265e;
  --accent-button-default: #003684;
  --surface-background: #00050d;
  --surface-default: #1a1f26;
  --surface-floated: #333d4a;
  --border-weak: #333d4a;
  --border-default: #4c5561;
  --border-strong: #666d77;
  --border-accent: #003684;
  --status-info-weak: #1c388c;
  --status-info-default: #2e5de8;
  --status-info-strong: #c0d0ff;
  --status-danger-weak: #7e1c19;
  --status-danger-default: #e5322e;
  --status-danger-strong: #f7bfbe;
  --status-warning-weak: #b59b2c;
  --status-warning-default: #ffda3e;
  --status-warning-strong: #fff4c3;
  --status-success-weak: #055028;
  --status-success-default: #099149;
  --status-success-strong: #b3ddc7;
  --status-neutral-weak: #4c5561;
  --status-neutral-default: #8e9aa8;
  --status-neutral-strong: #e2e8f0;
  --overlay-dimmed: rgba(0, 0, 0, 0.8);
  --overlay-sticky: #00050d;
  --gradient-vertical: linear-gradient(0deg, #00050d 0%, #00050d00 100%);
  --gradient-horizontal: linear-gradient(-90deg, #00050d 0%, #00050d00 100%);
`;
