import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, Home, RestaurantMenu } from '@material-ui/icons'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navTitle: {
    color: 'white',
    textDecoration: 'none'
  },
  list: {
    width: 250
  },
  appBar: {
    background: '#00b9cd'
  }
}))

const Navbar = _ => {
  const classes = useStyles()

  const [drawerState, setDrawerState] = useState({
    left: false
  })

  drawerState.toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerState({ ...drawerState, [side]: open })
  }

  const handleLogOut = _ => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('admin')
  }

  drawerState.sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={drawerState.toggleDrawer(side, false)}
      onKeyDown={drawerState.toggleDrawer(side, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <Link to='/' className='drawerLink'>
            <ListItemText primary='Home' />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RestaurantMenu />
          </ListItemIcon>
          <Link to='/menu' className='drawerLink'>
            <ListItemText primary='Menu' />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        {
          localStorage.getItem('admin') === 'true'
            ? <ListItem>
              <i className='material-icons'>vpn_key</i>
              <Link to='/admincomments' className='drawerLink'><ListItemText primary='Admin' /></Link>
            </ListItem> : null
        }
        {
          localStorage.getItem('user')
            ? <>
              <ListItem>
                <i className='material-icons'>video_library</i>
                <Link to='/watchlist' className='drawerLink'><ListItemText primary='My Watch List' />
                </Link>
              </ListItem>
              <ListItem>
                <i className='material-icons'>exit_to_app</i>
                <Link to='/' className='drawerLink'><ListItemText primary='Log Out' onClick={handleLogOut} />
                </Link>
              </ListItem>

            </>
            : <>
              <ListItem>
                <i className='material-icons'>exit_to_app</i>
                <Link to='/login' className='drawerLink'><ListItemText primary='Login' /></Link>
              </ListItem>
              <ListItem>
                <i className='material-icons'>exit_to_app</i>
                <Link to='/signup' className='drawerLink'><ListItemText primary='Sign Up' /></Link>
              </ListItem>
            </>
        }
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='Menu' onClick={drawerState.toggleDrawer('left', true)}>
            <Menu />
          </IconButton>
          <Typography varient='h6' classname={classes.title}>
            Tracking App Title
          </Typography>
          <Button color='inherit'>
            Login
          </Button>
          <Button color='inherit'>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerState.left} onClose={drawerState.toggleDrawer('left', false)}>
        {drawerState.sideList('left')}
      </Drawer>
    </div >
  )
}

export default Navbar
