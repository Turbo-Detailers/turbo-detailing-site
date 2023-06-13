import { motion } from "framer-motion";
import Link from "next/link";
import { Fonts } from "../bin/fonts";
import styles from "../styles/components/Navbar.module.scss";
import linkStyles from "../styles/components/Text/Link.module.css";
import { useState, MouseEvent, MouseEventHandler } from "react";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

const settings: {
  label: string;
  href: string;
  onClick: MouseEventHandler<HTMLElement>;
  conditional: Function;
}[] = [
  {
    label: "Login",
    href: "/login",
    onClick: function doNothing() {},
    conditional: (session: Session) => (session ? false : true),
  },
  {
    label: "Account",
    href: "/",
    onClick: function doNothing() {},
    conditional: (session: Session) => (session ? true : false),
  },
  {
    label: "Dashboard",
    href: "/",
    onClick: function doNothing() {},
    conditional: () => true,
  },
  {
    label: "Logout",
    href: "/login",
    onClick: function logout() {
      signOut();
    },
    conditional: (session: Session) => (session ? true : false),
  },
];

const moreMenu: {
  label: string;
  href: string;
  onClick: MouseEventHandler<HTMLElement>;
  conditional: Function;
}[] = [
  {
    label: "Blog",
    href: "/blog",
    onClick: () => {},
    conditional: () => true,
  },
  {
    label: "FAQ",
    href: "/faq",
    onClick: () => {},
    conditional: () => true,
  },
];

function Navbar() {
  const { data: session } = useSession();

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

  // const iconVariants = {
  //   opened: {
  //     rotate: 135,
  //   },
  //   closed: {
  //     rotate: 0,
  //   },
  // };

  // const menuVariants = {
  //   opened: {
  //     top: 0,
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.5,
  //     },
  //   },
  //   closed: {
  //     top: "-90vh",
  //   },
  // };

  // const linkVariants = {
  //   opened: {
  //     opacity: 1,
  //     y: 50,
  //   },
  //   closed: {
  //     opacity: 0,
  //     y: 0,
  //   },
  // };

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
            href="/gallery"
            className={linkStyles["hover-animation"]}
            // style={{ marginRight: "2.5rem" }}
          >
            Gallery
          </Link>
          <Link href="/contact" className={linkStyles["hover-animation"]}>
            Contact
          </Link>
          <Link
            href=""

            // style={{ marginRight: "2.5rem" }}
          >
            <Tooltip title="More options">
              <p
                className={linkStyles["hover-animation"]}
                onClick={handleOpenNavMenu}
              >
                More
              </p>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {moreMenu.map((menuItem) => {
                return !menuItem.conditional(session) ? null : (
                  <MenuItem key={menuItem.label} onClick={handleCloseUserMenu}>
                    <button
                      style={{
                        background: "none",
                        color: "inherit",
                        border: "none",
                        padding: 0,
                        font: "inherit",
                        cursor: "pointer",
                        outline: "inherit",
                      }}
                      onClick={menuItem.onClick}
                    >
                      <Typography
                        textAlign="center"
                        component={Link}
                        href={menuItem.href}
                      >
                        {menuItem.label}
                      </Typography>
                    </button>
                  </MenuItem>
                );
              })}
            </Menu>
          </Link>
        </div>
        {/* <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 0, marginLeft: "0.95rem" }}
            >
              <Avatar
                src={session?.user?.image ? session.user?.image : ""}
                alt={session?.user?.name ? session.user?.name : ""}
                sx={{ width: "30px", height: "30px" }}
              />
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
            {settings.map((setting) => {
              return !setting.conditional(session) ? null : (
                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                  <button
                    style={{
                      background: "none",
                      color: "inherit",
                      border: "none",
                      padding: 0,
                      font: "inherit",
                      cursor: "pointer",
                      outline: "inherit",
                    }}
                    onClick={setting.onClick}
                  >
                    <Typography
                      textAlign="center"
                      component={Link}
                      href={setting.href}
                    >
                      {setting.label}
                    </Typography>
                  </button>
                </MenuItem>
              );
            })}
          </Menu>
        </Box> */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
