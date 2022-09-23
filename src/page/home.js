import background from '../pics/background.png'
import woman from '../pics/woman.png'
import g1 from '../pics/1.png'
import g2 from '../pics/2.png'
import g3 from '../pics/3.png'
import bar from '../pics/bar.png'

const Home = ()=>{
    return(
        <div id="home">
            <div id="mainpic">
                <div style={{width:"100%"}}>
                <span>
                <img id="logo" src={woman} alt="logo" />
                </span>
                <span style={{fontSize:"60px"}}>
                    <p >The Go to Bail Bonds Agency <br/> 
                    <span id="pink"> Broward</span>, <span id="pink">Palm Beach</span> and <span id="pink">Miami</span></p>
                </span>
                <span style={{fontSize:"24px"}}>
                    <p>The Best choice bail bonds agency in Flordia!<br/>
                       Our areas of focus include; Reliability, Peofessionalism and Quality care</p>
                </span>
                <span style={{height:"30px", display:"flex", justifyContent:"center", marginBottom:"50px"}} >
                    <span id="call"> Call us 800 444-4444</span>

                </span>
                </div>
            </div>

            <div id="info">
                <span>
                    <img src={g1}/>
                    
                    <p>Live feed from <br/>
                    Broward County Court:<br/>
                    Mon-Thurs:8:30AM and 10PM<br/>
                    Sat and Sun: 8:30AM</p>
                    <div>
                    <button>WATCH LIVE HEARINGS</button>
                    </div>
                    <div>

                    <button>ZOOM LINK FOR HEARINGS</button>
                    </div>
                    
                    
                    
                </span>
                <span>
                    <img src={g2}/>
                    <p>View the arrest information <br/>
                    and phtot of a curren incarcerated<br/>
                    inmate in Broward County<br/>
                    </p>
                    <div>
                    <button>BROWARD COUNTY INFOR</button>
                    </div>
                    <div>

                    <button>PALM BEACH COUNTY INFO</button>
                    </div>
                    <div>

                    <button>MIAMI-DADE COUNTY INFO</button>
                    </div>
                </span>
                <span>
                    <img src={g3}/>
                    <p>View the arrest information <br/>
                    and phtot of a curren incarcerated<br/>
                    inmate in Broward County<br/>
                    </p>
                    <div>
                    <button>BROWARD COUNTY</button>
                    </div>
                    <div>

                    <button>PALM BEACH COUNTY</button>
                    </div>
                    <div>

                    <button>MIAMI-DADE COUNTY</button>
                    </div>
                </span>
                
            </div>
            <img id="bottomimage"/>

            <div id="bottom">
                <p>Necesita una finza? Se Habla Espanol<br/><span>Haga clik en este enlace para visrae nuestro sitio web enespanol</span></p>
                <button id="button">Espanol</button>
                </div>

        </div>
    )


}

export default Home