
import { Helmet } from "react-helmet-async";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Footer from "../../SharedComponents/Footer/Footer";
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";



const Blogs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    useEffect(() => {
        console.log(isInView)
    }, [isInView])
    return (
        <div>
            <Helmet>
                <title>hireHarbor | Blogs</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <div ref={ref}>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, delay: 0.25 }}
                        className="max-w-6xl mx-auto mt-12 mb-12">
                        <div className="flex flex-col md:flex-row p-5 md:p-4 items-center justify-center gap-5">
                            <div className="flex-1">
                                <img className="rounded-lg" src="https://img.freepik.com/premium-photo/businessman-protecting-data-personal-information-cyber-security-data-concept-padlock-internet-te_117255-1976.jpg" alt="" />

                            </div>
                            <div className="flex-1 text-lg p-5 border-2 rounded-2xl">
                                <h1 className="text-3xl font-bold text-lime-500 mb-4">What is an access token?</h1>
                                <p><span className="font-bold text-green-500">An access token</span> is a short-lived, temporary credential used to access protected resources on behalf of an authenticated user. It is like a key that allows the client to make authorized requests to the resource server</p>
                                <p><span className="font-bold">Lifespan:</span>
                                    Access tokens have a relatively short lifespan, typically lasting from minutes to a few hours, depending on the system&apos;s configuration.
                                </p>
                                <p><span className="font-bold">Usage:</span>
                                    When a user logs in and authorizes the client application, it receives an access token. This token is included in the HTTP headers of requests to the resource server. The resource server validates the token and grants or denies access accordingly.
                                </p>

                            </div>

                        </div>
                        <div className="max-w-5xl mx-auto mt-8 p-5">
                            <p><span className="font-bold">Access Tokens:</span> Access tokens are sensitive and must be protected. It is recommended to store them securely and avoid exposing them in client-side code (e.g., JavaScript). Common methods for storing access tokens include:</p>
                            <ul className="list-disc ml-8">
                                <li>In-memory storage: Store the token in a JavaScript variable during the session. This is suitable for web apps.</li>
                                <li>Secure HTTP cookies: For web apps, you can use HttpOnly and Secure cookies to store tokens.</li>
                                <li>Local Storage and Session Storage: Use with caution due to potential vulnerabilities and lack of built-in security.</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row p-5 md:p-4 items-center justify-center gap-5 mt-12">
                                <div className="flex-1  p-8 border-2 rounded-2xl text-lg">
                                    <h1 className="text-3xl font-bold text-lime-500 mb-4">What is a refresh token?</h1>
                                    <p> <span className="font-bold text-green-500">A refresh token</span> is a long-lived credential used to obtain new access tokens without requiring the user to re-enter their credentials. It enhances security by reducing the frequency with which users need to authenticate.</p>
                                    <p><span className="font-bold">Lifespan:</span> Refresh tokens have a longer lifespan compared to access tokens, often measured in days or weeks.</p>
                                    <p><span className="font-bold">Usage:</span> When an access token expires, the client can use a refresh token to request a new access token from the authorization server. This process is called token refresh. It doesn&apos;t require the user to re-enter their credentials.</p>

                                </div>
                                <div className="flex-1">
                                    <img className="rounded-lg" src="https://img.freepik.com/premium-photo/businessman-using-smartphone-access-biometric-data-by-input-password-fingerprint-scanner-access-security-system-futuristic-technology-concept_50039-2790.jpg?w=740" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="max-w-5xl mx-auto mt-8 p-5">
                            <p><span>Refresh Tokens:</span> Refresh tokens are even more sensitive and should be stored securely. It&apos;s often recommended to store them on the server-side. If you must store them on the client-side:</p>
                            <ul className="list-disc">
                                <li>Use HTTP cookies with HttpOnly and Secure attributes.</li>
                                <li>Store them in a secure, encrypted storage mechanism provided by the platform (e.g., Keychain for iOS or Keystore for Android).</li>
                            </ul>
                        </div>
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-5xl font-bold text-center my-14 text-lime-500">----Express Js---</h1>
                            <p><span className="font-bold text-green-500 text-lg" >Express.js</span>, often referred to simply as Express, is a popular and minimalistic web application framework for Node.js. It provides a robust set of features for building web and mobile applications, as well as APIs. Express is known for its simplicity, flexibility, and ease of use, making it a top choice for many developers when creating server-side applications.</p>
                        </div>
                        <div className="flex items-center justify-center gap-5 my-8">
                            <div className="flex-1">
                                <img className="rounded-xl" src="https://i.ibb.co/tDJv4jY/routing.png" alt="" />
                            </div>
                            <div className="flex-1">
                                <p className="text-lg">
                                    <span className="font-bold text-lg"> Routing:</span>
                                    Express simplifies the process of defining and handling routes, making it easy to respond to HTTP requests. You can define routes for various HTTP methods (e.g., GET, POST, PUT, DELETE) and specify how your application should respond to requests at specific endpoints. Here&apos;s a basic example:
                                </p>

                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-5 my-8">
                            <div className="flex-1">
                                <p className="text-lg"><span className="font-bold">Middleware:</span>
                                    Middleware functions are a fundamental concept in Express. They are functions that have access to the request and response objects and can perform tasks like logging, authentication, validation, and more. Middleware functions can be added to the request handling pipeline using app.use() or associated with specific routes. This allows you to modularize and organize your application&apos;s functionality effectively.</p>

                            </div>
                            <div className="flex-1">
                                <img className="rounded-xl" src="https://i.ibb.co/cby95jD/middleware.png" alt="" />

                            </div>
                        </div>
                        <div className="max-w-4xl my-8 text-lg text-center mx-auto">
                            <p>In summary, Express.js is a versatile and powerful framework for building web applications and APIs with Node.js. Its simplicity and flexibility, along with its rich ecosystem and active community, make it a top choice for many developers seeking to create server-side applications. Whether you&apos;re building a small web application or a complex API, Express can streamline the development process and help you create efficient and maintainable code.</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold text-center my-14 text-lime-500">----Nest Js---</h1>
                            <p> <span className="font-bold text-green-500 text-lg">NestJS</span> is a popular and powerful Node.js framework for building scalable and maintainable server-side applications. It is often described as a progressive, full-stack framework because it combines elements of both the front-end and back-end development, and it&apos;s designed to make it easier to build enterprise-grade applications. Here&apos;s an elaborate explanation of NestJS:</p>
                        </div>
                        <div className="flex items-center justify-center gap-5 my-12">
                            <div className="flex-1">
                                <ul className="list-disc">
                                    <li className="text-lg"><span className="font-bold">Modularity:</span>
                                        NestJS encourages a modular and organized code structure. It is built around the concept of modules, which are containers for related code. Each module can contain controllers, services, and other components. This modular structure makes it easy to manage and scale complex applications.</li>
                                </ul>
                                <ul className="list-disc">
                                    <li className="text-lg"><span className="font-bold">TypeScript:</span>

                                        NestJS is written in TypeScript, a superset of JavaScript that adds static typing to the language. TypeScript provides benefits such as improved code quality, enhanced tooling support, and easier maintenance. NestJS leverages TypeScript to bring strong typing and compile-time checks to your application.</li>
                                </ul>
                                <ul className="list-disc">
                                    <li className="text-lg"><span className="font-bold"> Express Integration:</span>


                                        NestJS is built on top of the Express.js framework, which means you can take advantage of all the features provided by Express while benefiting from the additional structure and features NestJS provides. You can also use custom middleware and decorators alongside Express.</li>
                                </ul>
                                <ul className="list-disc">
                                    <li className="text-lg"><span className="font-bold"> Interceptors:</span>
                                        Interceptors are used to process both request and response objects globally. They are useful for tasks like data transformation, logging, and error handling. Interceptors can be applied to controllers or routes.</li>
                                </ul>

                            </div>
                            <div className="flex-1">
                                <img className="rounded-xl" src="https://miro.medium.com/v2/resize:fit:1040/0*zRv5TkRmhAyLnG-t.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg">In summary, NestJS is a full-featured Node.js framework that combines the benefits of TypeScript, modularity, and a well-defined structure to make it easier to build complex, scalable, and maintainable server-side applications. Whether you are building RESTful APIs, real-time applications, microservices, or anything in between, NestJS provides a solid foundation for your project. It is a powerful choice for developers who prefer a structured and maintainable approach to application development.</p>
                        </div>
                        <div>
                            <h1 className="text-center text-4xl mt-12 font-bold space-y-5">My Code Explanation</h1>
                            <p>
                                <span className="text-lg font-bold">Data Fetching with useEffect:</span>
                                I use the useEffect hook to fetch data from My server using the fetch API. There are two useEffect blocks. The first one fetches categories from https://hire-harbor-server.vercel.app/category and updates the categories state when the data is received. The second one fetches jobs from https://hire-harbor-server.vercel.app/jobs and updates the jobs state.
                            </p>
                            <p><span className="text-lg font-bold"> Pagination:</span>

                                I implement a simple pagination system with Prev and Next buttons to navigate through the pages of jobs. The currentPage state is used to determine which jobs to display.
                                The number of pages is calculated based on the number of jobs and items per page, and buttons are generated accordingly.
                            </p>
                            <p>
                                <span className="text-lg font-bold">Search Functionality:</span>


                                Users can enter search queries in the input field, and when they click Search the handleSearch function filters the job data based on the query. Search results are displayed in the table.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;