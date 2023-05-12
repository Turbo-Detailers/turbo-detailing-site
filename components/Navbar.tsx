import { motion } from "framer-motion";
import Link from "next/link";
import { Fonts } from "../bin/fonts";
import styles from "../styles/components/Navbar.module.scss";
import linkStyles from "../styles/components/Text/Link.module.css";
import { useState, MouseEvent } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const settings: { label: string; href: string }[] = [
  { label: "Account", href: "/account" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Logout", href: "/signout" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, type: "spring" } }}
      className={styles.navbar_main}
    >
      <Link
        href="/"
        className={`${linkStyles["hover-animation"]} ${Fonts.title} ${styles.logoText}`}
      >
        <b>TURBO</b>
      </Link>

      <a></a>
      <div className="flex-row">
        <div className={`flex-row ${styles.link_row}`}>
          <Link
            href="/pricing"
            className={linkStyles["hover-animation"]}
            // style={{ marginRight: "2.5rem" }}
          >
            Pricing
          </Link>
          <Link
            href="/faq"
            className={linkStyles["hover-animation"]}
            // style={{ marginRight: "2.5rem" }}
          >
            FAQ
          </Link>
          <Link
            href="/gallery"
            className={linkStyles["hover-animation"]}
            // style={{ marginRight: "2.5rem" }}
          >
            Gallery
          </Link>
          <Link href="/contact" className={linkStyles["hover-animation"]}>
            Contact
          </Link>
        </div>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 0, marginLeft: "0.95rem" }}
            >
              <Avatar alt="Profile Picture" src="" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  component={Link}
                  href={setting.href}
                >
                  {setting.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
    </motion.nav>
  );
}

export default Navbar;
