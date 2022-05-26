const viewPorts = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "360px",
      height: "640px",
    },
    type: "mobile",
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewPorts,
    defaultViewport: "mobile",
  },
};
