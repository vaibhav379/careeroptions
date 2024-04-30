import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import './App.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, maxHeight: "60px" }}
        elevation={2}
      >
        <Toolbar>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h5"
            noWrap
            component="div"
          >
            Career Options
          </Typography>
        </Toolbar>
      </AppBar>
      <AppRoutes/>
    </Box>
  );
}

export default App;
