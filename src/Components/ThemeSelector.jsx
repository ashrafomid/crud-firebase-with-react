import { useTheme } from '../hooks/useTheme'
import './ThemeSelector.css'
import modeIcon from '../assets/light-dark.svg'
const themeColors= ["#58249c", "#249c6b", "#b70233"]
export default function ThemeSelector(){
    
    const {changeColor, changeMode, mode} = useTheme()
    const toggleMode =()=>{
        changeMode(mode==="light" ? "dark": "light")
        console.log(mode)
    }
    
    return(
        <div className='theme-selector'>
            <div className="mode-toggle">
                <img 
                src={modeIcon}
                onClick= {toggleMode}
                alt='/'
                srcSet=''
                style={{filter: mode==='dark'? 'invert(100%)': 'invert(20%)'}}
                />
            </div>
            <div className="theme-button">
                {themeColors.map(color=>(
                    <div
                    key={color}
                    onClick= {()=> changeColor(color)}
                    style = {{background: color}}
                    />
                ))}
            </div>
        </div>
    )
}