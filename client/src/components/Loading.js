/**
 * Displays a 'loading' icon on the screen and centers it if the center prop is passed in.
 * @param center
 * @returns {JSX.Element}
 * @constructor
 */
const Loading = ({center}) => {
    return (
        <div className={center ? "loading loading-center" : "loading"}></div>
    )
}

export default Loading;
