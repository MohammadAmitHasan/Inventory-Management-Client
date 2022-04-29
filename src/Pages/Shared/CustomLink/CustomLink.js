import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const activeStyle = {
        fontSize: '15px',
        margin: '0 10px',
        padding: '4px 10px',
        borderRadius: '5px',
        textDecoration: 'none',
        color: match ? '#ff2e70' : 'white',
        fontWeight: 'bold'
    }
    return (
        <div className=' mb-3 md:mb-0'>
            <Link
                className='border-b-2 border-[#ff347400] hover:border-red-500'
                style={activeStyle}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;

