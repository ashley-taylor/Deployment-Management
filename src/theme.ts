import { createMuiTheme } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'

export const phocasColors = {
  blue: {
    light: '#8ad9eb',
    main: '#4ec6e0',
    dark: '#46AFC7',
    contrastText: '#FFFFFF'
  },
  orange: {
    main: '#F7941E'
  },
  red: {
    main: '#E14E4E'
  },
  green: {
    light: '#39CE14'
  },
  white: '#FFFFFF',
  black: '#000000',
  grey: '#757575'
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      ...phocasColors.blue
    },
    secondary: {
      main: deepOrange[500]
    }
  },
  overrides: {
    MuiTableCell: {
      sizeSmall: {
        padding: 10
      }
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: '1rem'
      },
      fontSizeLarge: {
        fontSize: '2.5rem'
      }
    },
    MuiButton: {
      label: {
        textTransform: 'none'
      },
      outlinedSecondary: {
        backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#ffffff',
          opacity: '80%'
        }
      }
    }
  }
})
