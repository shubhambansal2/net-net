import React from 'react';

const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div style={{ paddingTop: '60px' }}>
            {children}
        </div>
    );
};

export default Layout;