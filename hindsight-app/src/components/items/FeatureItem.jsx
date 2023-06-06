const FeatureItem = ({ text, icon, desc }) => {
    return (
        <div className='feature-item rounded-outline bg-dark-grey-3'>
            <div className='py-10 px-6 feature-item__content relative flex flex-col items-start after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:rounded-xl after:z-[-1] after:absolute'>
                {/* <img src={ icon } className='icon' /> */}
                <h3 className='font-brand-regular text-x-medium-s text-white mb-4'>{ text }</h3>
                <p className='font-brand-regular text-large-semi-bold font-regular text-secondary-color'>{ desc }</p>
            </div>
        </div>
    )
}

export default FeatureItem