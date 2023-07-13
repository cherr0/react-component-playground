import type { Args, Preview, ReactRenderer } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import { DecoratorFunction } from '@storybook/types';

import { Simplify } from 'type-fest';
import { defaultTheme } from '../src/styles/theme';
import { darkVariables, lightVariables } from '../src/styles/variable';

const StoryWrapper = styled.div<{ mode: string }>`
  ${({ mode }) => (mode === 'light' ? lightVariables : darkVariables)};
`;

const decorator: DecoratorFunction<ReactRenderer, Simplify<Args>> = (
  Story,
  { globals }
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StoryWrapper mode={globals.theme ?? 'light'}>
        <GlobalStyle />
        <Story />
      </StoryWrapper>
    </ThemeProvider>
  );
};

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const preview: Preview = {
  parameters,
  decorators: [decorator],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'eye',
        items: ['light', 'dark'],
        dynamicTitle: true
      }
    },
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
          { value: 'es', right: '🇪🇸', title: 'Español' },
          { value: 'zh', right: '🇨🇳', title: '中文' },
          { value: 'kr', right: '🇰🇷', title: '한국어' }
        ],
        dynamicTitle: true
      }
    }
  }
};

export default preview;
