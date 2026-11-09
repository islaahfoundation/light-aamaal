import Header from "./Header";

import BottomNavigation from "./BottomNavigation";

import "./PageLayout.css";



function PageLayout({

children,

title = "Aamaal",

subtitle = "",

showHeader = true,

showBack = false,

showNotifications = true,

showSettings = false,

showBottomNav = false,

rightContent = null,

className = "",

}) {

return (

<div className={`page-layout ${className}`}>

{showHeader && (

<div className="page-layout-header">

<Header

title={title}

subtitle={subtitle}

showBack={showBack}

showNotifications={showNotifications}

showSettings={showSettings}

rightContent={rightContent}

/>

</div>

)}



<main className="page-layout-content">

{children}

</main>



{showBottomNav && <BottomNavigation />}

</div>

);

}



export default PageLayout;