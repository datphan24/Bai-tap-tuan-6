import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MessageIcon from '@mui/icons-material/Message'
import { useNavigate } from "react-router-dom"

export default function MainListItems() {
  let navigate = useNavigate()
  return (
    <div>
      <ListItem button onClick={() => navigate('/dashboard')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={() => navigate('/chat')} >
        <ListItemIcon>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem>
    </div>
  )
}
