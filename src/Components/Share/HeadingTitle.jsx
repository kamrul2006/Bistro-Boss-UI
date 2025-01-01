
const HeadingTitle = ({ subHeading, heading }) => {
    return (
        <div>

            <div className='text-center mb-10'>

                <p className='my-3 text-orange-500'>--- {subHeading} ---</p>

                <h1 className='text-3xl py-5 px-10 border-y-2 w-fit mx-auto'>{heading}</h1>
            </div>
        </div>
    );
};

export default HeadingTitle;