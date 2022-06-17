import Header from "./Header/header";
import Sidebar from "./SideBar/sidebar";

function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content"> {children}</div>
            </div>
        </div> 
    
    );
}

export default DefaultLayout;