import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header/header";
import Sidebar from "./SideBar/sidebar";
import styles from "./DefaultLayout.module.scss"

const cx= classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}> {children}</div>
            </div>
        </div> 
    
    );
}

export default DefaultLayout;