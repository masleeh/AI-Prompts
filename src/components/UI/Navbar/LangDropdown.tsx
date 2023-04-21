import { INav } from "@/types/navbar"
import { UKIcon, RUIcon } from "@/assets/icons/icons"
import useDisableSelect from "@/helpers/useDisableSelect"

const LangDropdown:React.FC<INav> = ({lan, setDropdown, dropdown, setLan, switchLanguage}) => {
    const {selectRef} = useDisableSelect(dropdown, setDropdown)
    return (
        <>
            <div className="navbar-main navbar-lan" ref={selectRef} onClick={() => setDropdown(!dropdown)}>{lan.toUpperCase()}</div>
            {dropdown && <div className="navbar-lan-cont" >
                <div className="navbar-lan-item" onClick={() => switchLanguage("en")}>
                    <div className="navbar-img-cont">{UKIcon()}</div>
                    EN
                </div>
                <div className="navbar-lan-item" onClick={() => switchLanguage("ru")}>
                    <div className="navbar-img-cont">{RUIcon()}</div>
                    RU
                </div>
                
            </div>}
        </>
    )
}

export default LangDropdown