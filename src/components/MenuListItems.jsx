import React from 'react'
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { useNavigate } from 'react-router-dom'


const icons = [
    {
      icon: <DashboardCustomizeIcon />,
      title: "Dashboard",
      url: "/stock/",
    },
    {
      title: "Purchase",
      icon: <ShoppingCartIcon />,
      url: "/stock/purchases/",
    },
    {
      title: "Sales",
      icon: <AttachMoneyIcon />,
      url: "/stock/sales/",
    },
    {
      title: "Firms",
      icon: <StoreIcon />,
      url: "/stock/firms/",
    },
    {
      title: "Brands",
      icon: <StarsIcon />,
      url: "/stock/brands/",
    },
    {
      title: "Products",
      icon: <InventoryIcon />,
      url: "/stock/products/",
    },
    {
      title: "Admin Panel",
      icon: <SupervisorAccountIcon />,
      url: "https://10001.fullstack.clarusway.com/admin",
    },
  ]

export const MenuListItems = () => {

    const navigate = useNavigate()


  return (
    <div>
        <List>
        {icons.map((item, index) => (
          <ListItem key={index} disablePadding onClick={()=>navigate(item.url)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
