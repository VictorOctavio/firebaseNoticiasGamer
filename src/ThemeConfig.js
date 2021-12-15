import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core'

import {blueGrey, orange} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[900]
        },
        secondary: {
            main: orange[300]
        }
        
    }
})

export default theme