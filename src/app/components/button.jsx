/**
 * this is a custom component we can use in our project
 * @param text
 * @param link
 * @returns {JSX.Element}
 * @constructor
 */
export default function Button({text, link}) {
    return (
        <div className="button">
            <a href={link} target="_blank">{text}</a>
        </div>);
}
