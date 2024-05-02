import { AppBar, Toolbar, Typography } from "@mui/material"

const AppBarHOC = (WrappedComponent)=>{

    return function EnhancedComponent(props){
        
        return(
        <>
        <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, maxHeight: "60px", bgcolor:"#79ab50" }}
        elevation={2}
      >
        <Toolbar>
          <Typography
            sx={{ fontWeight: "bold",color:"#fff" }}
            variant="h5"
            noWrap
            component="div"
          >
            Career Options
          </Typography>
        </Toolbar>
      </AppBar>
      <WrappedComponent {...props}/>
      </>
    )
    }
}

export default AppBarHOC;
