import {
  createBaseThemeOptions,
  palettes,
  createUnifiedTheme,
  // shapes,
  genPageTheme,
} from '@backstage/theme';

import { alpha } from '@material-ui/core/styles';

// Change stop color: https://johndecember.com/html/spec/colorsvg.html
export const shapes: Record<string, string> = {
  wave: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1368' height='401' x='0' y='0' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M437 116C223 116 112 0 112 0h1256v400c-82 0-225-21-282-109-112-175-436-175-649-175z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1368 400V282C891-29 788 40 711 161 608 324 121 372 0 361v39h1368z'/%3e%3cpath fill='url(%23paint2_linear)' d='M1368 244v156H0V94c92-24 198-46 375 0l135 41c176 51 195 109 858 109z'/%3e%3cpath fill='url(%23paint3_linear)' d='M1252 400h116c-14-7-35-14-116-16-663-14-837-128-1013-258l-85-61C98 28 46 8 0 0v400h1252z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M-172-98h1671v601H-172z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='602' x2='1093.5' y1='-960.5' y2='272' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='482' x2='480' y1='1058.5' y2='70.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='424' x2='446.1' y1='-587.5' y2='274.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='587' x2='349' y1='-1120.5' y2='341' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
  wave2: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1764' height='479' x='-229' y='-6' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M0 400h1350C1321 336 525 33 179-2c-345-34-395 236-408 402H0z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1378 177v223H0V217s219 75 327 52C436 246 717-35 965 45s254 144 413 132z'/%3e%3cpath fill='url(%23paint2_linear)' d='M26 400l-78-16c-170 205-44-6-137-30l-4-1 4 1 137 30c37-45 89-110 159-201 399-514-45 238 1176-50 275-65 354-39 91 267H26z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M0 0h1368v400H0z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='431' x2='397.3' y1='-599' y2='372.8' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='236.5' x2='446.6' y1='-586' y2='381.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='851.8' x2='640.4' y1='-867.2' y2='363.7' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
  round: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='2269' height='1408' x='-610' y='-509' maskUnits='userSpaceOnUse'%3e%3ccircle cx='1212.8' cy='74.8' r='317.5' fill='url(%23paint0_linear)' transform='rotate(-52 1213 75)'/%3e%3ccircle cx='737.8' cy='445.8' r='317.5' fill='url(%23paint1_linear)' transform='rotate(-116 738 446)'/%3e%3ccircle cx='601.8' cy='52.8' r='418.6' fill='url(%23paint2_linear)' transform='rotate(-117 602 53)'/%3e%3ccircle cx='999.8' cy='364' r='389.1' fill='url(%23paint3_linear)' transform='rotate(31 1000 364)'/%3e%3cellipse cx='-109.2' cy='263.5' fill='url(%23paint4_linear)' rx='429.2' ry='465.8' transform='rotate(-85 -109 264)'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M0 0h1368v400H0z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='1301.2' x2='161.4' y1='-1879.7' y2='-969.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='826.2' x2='-313.6' y1='-1508.7' y2='-598.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='718.4' x2='-784.3' y1='-2524' y2='-1324.2' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='1108.2' x2='-288.6' y1='-2031.1' y2='-915.9' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear' x1='10.4' x2='-1626.5' y1='-2603.8' y2='-1399.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='darkslategrey'/%3e%3cstop offset='1' stop-color='darkslategrey' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
};

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
        main: '#F1FA8C',
        light: '#FFB86C',
        dark: '#50FA7B',
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
        submenu: {
          background: '#21222c',
        }
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
      options: { fontColor: '#a0aac8' },
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
        containedPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.light,
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
          },
        }),
        outlinedPrimary: ({ theme }) => ({
          color: theme.palette.secondary.light,
          border: `1px solid ${theme.palette.secondary.light}`,
          '&:hover': {
            backgroundColor: alpha(theme.palette.secondary.light, 0.1),
            color: theme.palette.secondary.light,
            border: `1px solid ${theme.palette.secondary.light}`,
          },
        }),
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
        // colorPrimary: ({ theme }) => ({
        //   color: theme.palette.secondary.light,
        // }),
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
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: ({ theme }) => ({
          color: theme.palette.secondary.light,
        }),
      },
    },
    BackstageIconLinkVertical: {
      styleOverrides: {
        primary: ({ theme }) => ({
          color: theme.palette.secondary.light,
        }),
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
