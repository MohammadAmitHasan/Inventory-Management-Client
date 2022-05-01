import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const activeStyle = {
        color: match ? '#ff2e70' : 'white',
    }
    return (
        <div className=' mb-3 md:mb-0'>
            <Link
                className='font-semibold decoration-none mx-3 py-1 px-2 rounded-md text-lg border-b-2 border-[#ff347400] hover:border-red-500'
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

