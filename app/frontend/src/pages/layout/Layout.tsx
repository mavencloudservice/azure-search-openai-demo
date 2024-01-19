import { Outlet, NavLink, Link } from "react-router-dom";

import text_logo from "../../assets/text_img.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <img src={text_logo} alt="AiM" className={styles.textLogo}></img>
                    </Link>
                    <h4 className={styles.headerRightText}>Maven Cloud Service</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
