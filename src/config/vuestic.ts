import { createIconsConfig, createVuestic } from "vuestic-ui";


const config = {
  config: {
    components: {
      VaButton: {
        preset: "secondary",
        borderColor: "primary",
        size: "large",
      },
    },
      colors: {
          variables: {
               // Default colors
              // primary: "#23e066",
              // secondary: "#002c85",
              // success: "#40e583",
              // info: "#2c82e0",
              // danger: "#e34b4a",
              // warning: "#ffc200",
              // gray: "#babfc2",
              // dark: "#34495e",

              // Custom colors
              // yourCustomColor: "#d0f55d",
          }
      },
      colorsClasses: [
          {
            prefix: '',
            property: ['border', 'color'],
          },
          {
            prefix: 'brand',
            property: 'background',
          },
      ],
      icons: createIconsConfig({
          aliases: [
            {
              name: "bell",
              color: "#FFD43A",
              to: "fa4-bell",
            },
            {
              name: "ru",
              to: "flag-icon-ru small",
            },
          ],
          fonts: [
            {
              name: "mdi-{icon}",
              resolve: ({ icon }) => ({
                class: `material-icons`,
                content: icon,
                attrs: { "aria-hidden": "true" },
                tag: "span",
              }),
            },
            {
              name: "fa4-{iconName}",
              resolve: ({ iconName }) => ({ class: `fa fa-${iconName}` }),
            },
            {
              name: "flag-icon-{countryCode} {flagSize}",
              resolve: ({ countryCode, flagSize }) => ({
                class: `flag-icon flag-icon-${countryCode} flag-icon-${flagSize}`,
              }),
            },
          ],
        }),
  }
};



export const vuestic = createVuestic(config as any);