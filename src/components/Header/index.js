import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link as RouterLink} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor:"#3d6eff"}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem type="button" {...{key: "Dep", to:"/deposito", component: RouterLink}}>Adicionar Depósito</MenuItem>
                        <MenuItem type="button"{...{key: "Comp", to:"/compras", component: RouterLink}}>Adicionar Compras</MenuItem>
                        <MenuItem type="button"{...{key: "Metas", to:"/metas", component: RouterLink}}>Metas</MenuItem>
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        Minhas Finanças
          </Typography>
                    <Button color="inherit"  type="button"{...{key: "Init", to:"/", component: RouterLink}}>Início</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
