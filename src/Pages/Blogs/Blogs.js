import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-16 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='p-5 shadow-lg shadow-purple-700 rounded-lg'>
                <h2 className='text-2xl text-red-400'>Difference between javascript and nodejs</h2>
                <p className='leading-7 text-gray-300 mt-2'>
                    1. JavaScript is a programming language where NodeJS a JavaScript runtime environment.
                    <br />
                    2. JavaScript is mainly used in the client side where not just is used in server side.
                    <br />
                    3. Using JavaScript we can handle HTML and Dom but we cannot do that using NodeJS
                    <br />
                    4. JavaScript can be run in any browser engine. Where V8 engine is used to run NodeJs.

                </p>
            </div>

            <div className='p-5 shadow-lg shadow-purple-700 rounded-lg'>
                <h2 className='text-2xl text-red-400'>
                    When should you use nodejs.?
                </h2>
                <p className='leading-7 text-gray-300 mt-2'>
                    We should use NodeJs in the case of building applications where lots of data transactions or data IO is the main purpose instead of CPU intensive computation.
                </p>
                <h2 className='text-2xl text-red-400 mt-2'>
                    When should you use mongodb.?
                </h2>
                <p className='leading-7 text-gray-300 mt-2'>
                    We should use MongoDB when the data is documents centric and doesn't fitwell into the schema of a relational database. MangoDB is also very efficient in the case of a massive scale database. In case of using multiple servers to support high data volumes and traffic we should use mongoDB.
                </p>
            </div>

            <div className='p-5 shadow-lg shadow-purple-700 rounded-lg'>
                <h2 className='text-2xl text-red-400'>
                    Differences between sql and nosql databases
                </h2>
                <p className='leading-7 text-gray-300 mt-2'>
                    1. SQL database is a relational database management system where NoSQL database is a distributed database system
                    <br />
                    2. SQL databases has fixed be defined schema where no SQL databases has dynamic schema
                    <br />
                    3. SQL databases are best for complex queries but no SQL databases are not so good for complex queries.
                    <br />
                    4. SQL databases can be scaled vertically no SQL database scaled better horizontally

                </p>
            </div>

            <div className='p-5 shadow-lg shadow-purple-700 rounded-lg'>
                <h2 className='text-2xl text-red-400'>
                    What is the purpose of jwt and how does it work.?
                </h2>
                <p className='leading-7 text-gray-300 my-2 '>
                    The purpose of using JWT is to provide protection or security to share security information between two parties, client and server.
                </p>
                <p className='leading-7 text-gray-300'>
                    Server creates a token using jwt and sends it to the client side. Client site stores the token on either local storage or browser cookies. When the client makes a request it sends the stored token to the server for authentication. Server verifies the jwt signature and authorizes the client. If the jwt is valid it responds to the request otherwise the server doesn't give the access permission.
                </p>


            </div>
        </div>
    );
};

export default Blogs;