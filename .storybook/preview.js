import './../src/layout/styles/boot.css'

import { StoryThemeProvider } from './../src/layout/styles/storyThemeProvider'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [StoryThemeProvider]