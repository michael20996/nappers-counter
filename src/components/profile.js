import React from "react";

// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridProfile from "./GridProfile";
import Counter from './Counter/index';


// const useStyles = makeStyles((theme) => ({
    
//   }));

function Profile() {
    
    return <Container>
              <GridProfile />
              <Counter/>
            </Container>
    

}

export default Profile