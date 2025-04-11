import PropTypes from 'prop-types'

const GithubIcon = ({ width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 98 96">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#24292f"
            />
        </svg>
    )
}

const NotionIcon = ({ width, height }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox="0 0 100 100"
            fill="none"
        >
            <rect width="100" height="100" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0" transform="scale(0.00195312)" />
                </pattern>
                <image
                    id="image0"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    )
}

GithubIcon.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}

NotionIcon.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}

export { GithubIcon, NotionIcon }
