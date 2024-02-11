import {
  createBaseThemeOptions,
  palettes,
  createUnifiedTheme,
  shapes,
  genPageTheme,
} from '@backstage/theme';

import { alpha } from '@material-ui/core/styles';

export const draculaTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      dracula: {
        background: '#282A36',
        currentLine: '#44475A',
        foreground: '#F8F8F2',
        comment: '#6272A4',
        cyan: '#8BE9FD',
        green: '#50FA7B',
        orange: '#FFB86C',
        pink: '#FF79C6',
        purple: '#BD93F9',
        red: '#FF5555',
        yellow: '#F1FA8C',
      },
      primary: {
        main: '#50FA7B',
        light: '#FFB86C',
        dark: '#F1FA8C',
      },
      secondary: {
        main: '#FF79C6',
        light: '#BD93F9',
        dark: '#8BE9FD',
      },
      grey: {
        50: '#a0aac8',
        100: '#6272a4',
        200: '#586693',
        300: '#4e5b83',
        400: '#444f72',
        500: '#3a4462',
        600: '#313952',
        700: '#272d41',
        800: '#1d2231',
        900: '#131620',
      },
      error: {
        main: '#FF5630',
        light: '#FF8F73',
        dark: '#DE350B',
      },
      warning: {
        main: '#FFAB00',
        light: '#FFE380',
        dark: '#FF8B00',
      },
      success: {
        main: '#36B37E',
        light: '#79F2C0',
        dark: '#006644',
      },
      info: {
        main: '#0065FF',
        light: '#4C9AFF',
        dark: '#0747A6',
      },
      navigation: {
        ...palettes.dark.navigation,
        background: '#21222c',
        color: '#6272A4',
        indicator: '#8BE9FD',
        navItem: {
          hoverBackground: '#44475A',
        },
      },
      text: {
        primary: '#F8F8F2',
      },
      background: {
        default: '#282A36',
        paper: '#21222c',
      },
    },
  }),
  fontFamily: 'Poppins, sans-serif',
  pageTheme: {
    home: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.wave,
      options: { fontColor: '#F8F8F2' },
    }),
    documentation: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.wave2,
      options: { fontColor: '#FF79C6' },
    }),
    tool: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.round,
      options: { fontColor: '#6272A4' },
    }),
    service: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.wave,
      options: { fontColor: '#FFB86C' },
    }),
    website: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.wave,
      options: { fontColor: '#F1FA8C' },
    }),
    library: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.wave,
      options: { fontColor: '#8BE9FD' },
    }),
    other: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.wave,
      options: { fontColor: '#44475A' },
    }),
    app: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.wave,
      options: { fontColor: '#FF5555' },
    }),
    apis: genPageTheme({
      colors: ['#282A36', '#282A36'],
      shape: shapes.wave,
      options: { fontColor: '#BD93F9' },
    }),
  },
  defaultPageTheme: 'home',
  components: {
    BackstageHeader: {
      styleOverrides: {
        header: ({ theme }) => ({
          // backgroundColor: '#282A36',
          backgroundImage: 'unset',
          boxShadow: 'unset',
          paddingBottom: theme.spacing(3),
        }),
        title: ({ theme }) => ({
          color: theme.palette.secondary.light,
          fontWeight: 100,
        }),
        subtitle: ({ theme }) => ({
          color: alpha(theme.palette.secondary.light, 0.8),
        }),
        type: ({ theme }) => ({
          color: alpha(theme.palette.secondary.light, 0.8),
        }),
      },
    },
    BackstageHeaderTabs: {
      styleOverrides: {
        defaultTab: {
          color: '#6272a4',
          fontSize: 'inherit',
          textTransform: 'none',
        },
      },
    },
    BackstageOpenedDropdown: {
      styleOverrides: {
        icon: {
          '& path': {
            fill: '#F8F8F2',
          },
        },
      },
    },
    BackstageTable: {
      styleOverrides: {
        root: {
          '&> :first-child': {
            borderBottom: '1px solid #D5D5D5',
            boxShadow: 'none',
          },
          '& th': {
            borderTop: 'none',
            textTransform: 'none !important',
          },
        },
      },
    },
    BackstageHeaderLabel: {
      styleOverrides: {
        label: ({ theme }) => ({
          color: theme.palette.primary.dark,
        }),
        value: ({ theme }) => ({
          color: alpha(theme.palette.primary.dark, 0.8),
        }),
      },
    },
    PluginCatalogEntityContextMenu: {
      styleOverrides: {
        button: {
          color: '#F8F8F2',
        },
      },
    },
    CatalogReactUserListPicker: {
      styleOverrides: {
        title: {
          textTransform: 'none',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        standardError: ({ theme }) => ({
          color: '#F8F8F2',
          backgroundColor: theme.palette.error.dark,
          '& $icon': {
            color: '#F8F8F2',
          },
        }),
        standardInfo: ({ theme }) => ({
          color: '#F8F8F2',
          backgroundColor: theme.palette.primary.dark,
          '& $icon': {
            color: '#F8F8F2',
          },
        }),
        standardSuccess: ({ theme }) => ({
          color: '#F8F8F2',
          backgroundColor: theme.palette.success.dark,
          '& $icon': {
            color: '#F8F8F2',
          },
        }),
        standardWarning: ({ theme }) => ({
          color: theme.palette.grey[700],
          backgroundColor: theme.palette.secondary.light,
          '& $icon': {
            color: theme.palette.grey[700],
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&[aria-expanded=true]': {
            backgroundColor: theme.palette.primary.light,
            color: '#21222c',
          },
          '&[aria-expanded=true] path': {
            fill: '#F8F8F2',
          },
        }),
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#282A36', 0.8),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 3,
          backgroundColor: '#282A36',
          border: '#BD93F9',
          color: theme.palette.primary.dark,
          margin: 4,
        }),
      },
    },
    // TODO: (awanlin) - we get a type error for `root`, need to investigate
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          '&[aria-expanded]': {
            backgroundColor: '#21222c',
            color: theme.palette.primary.light,
          },
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 10,
        },
        switchBase: {
          padding: 12,
        },
        thumb: {
          backgroundColor: '#F8F8F2',
          height: 14,
          width: 14,
        },
        track: {
          borderRadius: 9,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          transition: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          textTransform: 'none',
        },
      },
    },
    BackstageSelectInputBase: {
      styleOverrides: {
        // .MuiSelect-select-5151.MuiSelect-select-5151
        root: {
          // color: "#6272A4",
          '&.Mui-focused > div[role=button]': {
            borderColor: '#F8F8F2',
          },
        },
        input: {
          border: '1px solid #6272A4',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: '#44475A',
          },
        },
        divider: {
          borderBottom: '1px solid #6272A4',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#44475A',
        },
      },
    },
    // CatalogReactEntityDisplayName: {
    //   styleOverrides: {
    //     root: ({ theme }) => ({
    //       color: theme.palette.secondary.light,
    //     }),
    //   }
    // }
  },
});
