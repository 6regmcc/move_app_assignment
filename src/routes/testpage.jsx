import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useState} from "react";
import HeaderAppBar from "../components/headerAppBar.jsx";
import Typography from "@mui/material/Typography";
import DraftsIcon from '@mui/icons-material/Drafts';



export default function TemporaryDrawer() {

    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        console.log('click')
        setOpen(!open)

    }

    return (
        <Box>
            <HeaderAppBar handleClick={handleClick}/>
            <Drawer
                anchor= "left"
                open = {open}
                onClose = {() => setOpen(false)}
                onOpen = {() => setOpen(true)}
            >

                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )


}