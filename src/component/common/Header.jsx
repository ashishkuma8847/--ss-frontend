import headerjson from "../../json/Header.json"
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    
  return (
    <>
     <section>
        <main className='pt-[30px] '>
            <div className='container'>
                <div className="flex w-full justify-between">
                        <Link to={"/"}><div className="flex justify-between items-center w-[230px] text-[20px] leading-4  ">
                               <img className='w-[40px] h-[40px]' src="headicon.svg" alt="icon" />
                               <h1 className='font-Poppins'>Shri Shyam Store</h1>
                        </div></Link>
                        <div className="flex max-w-[500px] w-full justify-between items-center">
                               {
                                    headerjson.pages.map((item,index)=>(
                                        <div className='cursor-pointer font-Poppins ' key={item+index+Date.now()}>
                                            <NavLink to={item.path} ><h1 className={ ` text-[20px] leading-4`}>{item.title}</h1>
                                            </NavLink>
                                            
                                        </div>
                                    ))
                               }
                        </div>
                </div>
            </div>
        </main>
     </section>
    </>
  )
}

export default Header