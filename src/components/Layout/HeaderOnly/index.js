import Header from "~/components/Layout/components/Header/header";


function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div className="container">

                <div className="content"> {children}</div>
            </div>
        </div> 

    );
}

export default DefaultLayout;