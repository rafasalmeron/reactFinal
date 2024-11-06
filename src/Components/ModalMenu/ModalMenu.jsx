import MenuIcon from '@mui/icons-material/Menu';
import {IconButton, Menu, MenuItem} from "@mui/material";
import React from "react";
import {Conteiner, LinkStiling} from "./styled.jsx";


export const ModalMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const options = [
        'Login',
        'Sobre',
        'Cadastro',
        'Home'
    ];

    const ITEM_HEIGHT = 48;

  return (
      <Conteiner>
          <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
          >
              <MenuIcon/>
          </IconButton>
          <Menu
              id="long-menu"
              MenuListProps={{
                  'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                  paper: {
                      style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '20ch',
                      },
                  },
              }}
          >
              {options.map((option) => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                      <LinkStiling to={`/${option}`}>
                          {option}
                      </LinkStiling>
                  </MenuItem>
              ))}
          </Menu>
      </Conteiner>
  );
}