import { motion } from "framer-motion";
import Link from "next/link";
import { Fonts } from "../bin/fonts";
import styles from "../styles/components/Navbar.module.scss";
import linkStyles from "../styles/components/Text/Link.module.css";
import { useState, MouseEvent, MouseEventHandler, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  useEffect(() => {
    if (isNavOpen) {
      setIsNavOpen(!isNavOpen);
    }
  }, [pathname]);

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
      <div className="flex-row hidden lg:flex">
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
          <span style={{ marginLeft: "2rem" }} className="hover:cursor-pointer">
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
          </span>
        </div>
      </div>

      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <div className="space-y-2 lg:hidden">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <motion.ul
            layout
            className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]"
          >
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
              href="/FAQ"
              className={linkStyles["hover-animation"]}
              // style={{ marginRight: "2.5rem" }}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className={linkStyles["hover-animation"]}
              // style={{ marginRight: "2.5rem" }}
            >
              Blog
            </Link>
          </motion.ul>
        </div>
      </section>
    </motion.nav>
  );
}

export default Navbar;
