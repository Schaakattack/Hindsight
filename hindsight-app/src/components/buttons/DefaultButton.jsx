import { Link } from "react-router-dom"

const DefaultButton = ({ children, to, icon, className, addClass }) => {
    let customClassName = ''
    
    if (className == 'btn-default') {
      	customClassName = 'font-roboto-bold font-medium text-sm tracking-tightest text-btn-default-color bg-gradient-primary py-4.3 px-6 rounded-xl hover:bg-btn-default-hover-bg-color hover:bg-none focus:bg-btn-default-pressed-bg-color focus:bg-none disabled:bg-btn-default-disabled-bg-color disabled:text-btn-disabled-color btn-default';
    } else if (className == 'btn-md') {
      	customClassName = 'font-brand-bold font-bold text-base tracking-tightest text-btn-default-color bg-gradient-primary py-4.3 px-6 rounded-xl hover:bg-btn-default-hover-bg-color hover:bg-none focus:bg-btn-default-pressed-bg-color focus:bg-none disabled:bg-btn-default-disabled-bg-color disabled:text-btn-disabled-color btn-default';
    } else if (className == 'btn-lg') {
      	customClassName = 'font-brand-bold font-bold text-title-sm tracking-tightest text-btn-default-color bg-gradient-primary py-5 px-6 rounded-xl hover:bg-btn-default-hover-bg-color hover:bg-none focus:bg-btn-default-pressed-bg-color focus:bg-none disabled:bg-btn-default-disabled-bg-color disabled:text-btn-disabled-color btn-default';
    } else if (className == 'btn-outline') {
      	customClassName = 'font-brand-regular font-bold text-base tracking-tightest text-btn-default-color border border-btn-outline-border-color bg-gradient-primary bg-clip-text text-fill-transparent py-3.5 px-6 rounded-xl relative hover:after:block hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-xl hover:after:bg-btn-outline-bg hover:after:absolute disabled:bg-btn-default-disabled-bg-color disabled:after:bg-transparent disabled:text-btn-disabled-color btn-default';
    } else if (className == 'btn-outline-md') {
      	customClassName = 'font-medium text-base tracking-tighter text-btn-default-color border border-btn-outline-border-color bg-gradient-primary bg-clip-text text-fill-transparent py-2.2 px-5 rounded-xl relative hover:after:block hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-xl hover:after:bg-btn-outline-bg hover:after:absolute disabled:bg-btn-default-disabled-bg-color disabled:after:bg-transparent disabled:text-btn-disabled-color btn-default';
    } else if (className == 'btn-outline-sm') {
      	customClassName = 'font-brand-regular w-fit font-bold text-title-xs text-white border border-white min-w-xxl py-2 px-6.5 rounded-xl relative hover:after:block hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-xl hover:after:bg-btn-outline-bg hover:after:absolute disabled:bg-btn-default-disabled-bg-color disabled:after:bg-transparent disabled:text-btn-disabled-color btn-default';
    }
    
    return <Link to={ to } className={ `flex justify-center gap-2 ${customClassName} ${ addClass }` }> 
      	{ icon && <img src={ icon } className='btn-icon' alt='' /> } { children }
    </Link>
}

export default DefaultButton