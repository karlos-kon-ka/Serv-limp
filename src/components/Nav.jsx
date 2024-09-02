import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

function Nav() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        
        <img src="/img/productos.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />

        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button component={NavLink} to="/" id='enlace' color="inherit" sx={{ textTransform: 'none' }}>
            Inicio
          </Button>
          <Button component={NavLink} to="/Servicios" id='enlace' color="inherit" sx={{ textTransform: 'none' }}>
            Servicios
          </Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
