import React from "react";
import "../styles/HomePage.less";


export const HomePage = (): JSX.Element => {
    return (
        <div className={"mh-homepage-body"}>
            <div className={"mh-homepage-header"}>Hi, I'm Muhammad Hammad!</div>
            <div className={"mh-homepage-subtext"}>
                I am full stack software developer currently working at<span> </span>
                <a href={"https://www.celtx.com/"}>Celtx Inc</a>.
                This is a small landing to work through some of my projects.
            </div>
            <div className={"mh-homepage-links"}>
                Some links to visit me at:
                <ul>
                    <li>Github: <a href={"https://github.com/mhnaeem"}>https://github.com/mhnaeem</a></li>
                    <li>Linkedin: <a href={"https://www.linkedin.com/in/mhnaeem99/"}>https://www.linkedin.com/in/mhnaeem99/</a></li>
                    <li>School Site: <a href={"https://www.cs.mun.ca/~mhnaeem/"}>https://www.cs.mun.ca/~mhnaeem/</a></li>
                </ul>
            </div>
        </div>
    )
}
