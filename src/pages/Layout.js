import { Outlet, Link } from "react-router-dom";
import Stack from '@mui/material/Stack'
import ButtonGroup from '@mui/material/ButtonGroup'
import TopNavButton from '../components/TopNavButton';
import Home from '@mui/icons-material/Home'

export default function Layout() {
    return (
        <>
            <nav class="App-nav">
                <div class="App-header">
                    <Link style={{ marginRight: "auto", marginLeft: "20px" }} to="/">
                        <TopNavButton>
                            <Home sx={{
                                width: 28,
                                height: 26
                            }}/>
                        </TopNavButton>
                        </Link>
                    <ButtonGroup style={{ marginLeft: "auto", marginRight: "20px" }} variant="text" aria-label="text button group">
                        <Link to="/work"><TopNavButton>Work</TopNavButton></Link>
                        <Link to="/projects"><TopNavButton>Projects</TopNavButton></Link>
                        <Link to="/contact"><TopNavButton>Contact</TopNavButton></Link>
                    </ButtonGroup>
                </div>
            </nav>
            <Outlet />
        </>

    );
}