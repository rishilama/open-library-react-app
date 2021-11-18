import { createContext , useState } from 'react';

const SidebarVisibilityContext = createContext();

export function SidebarVisibilityContextProvider({children}) {
    const [ sidebarVisibility, setSidebarVisibility ] = useState(false);

    function toggleSidebarVisibility() {
        setSidebarVisibility((prevState) => prevState ? false : true);
    }

    return(
        <SidebarVisibilityContext.Provider value={[sidebarVisibility, setSidebarVisibility, toggleSidebarVisibility]}>
            {children}
        </SidebarVisibilityContext.Provider>
    );
}

export default SidebarVisibilityContext;