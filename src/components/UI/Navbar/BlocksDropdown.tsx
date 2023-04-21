import { IDropdown } from "@/types/navbar"
import { icons } from "@/assets/icons/icons"
import useDisableSelect from "@/helpers/useDisableSelect"

const BlocksDropdown:React.FC<IDropdown> = ({dropdown, setDropdown, blocks, router}) => {
  const {selectRef} = useDisableSelect(dropdown, setDropdown)

  return (
    <>
        <div ref={selectRef} className="navbar-main navbar-lan" onClick={() => setDropdown(!dropdown)}><div className="navbar-img-cont">{icons.ico51}</div>Блоки</div>
        {dropdown && <div className="navbar-lan-cont">
            {blocks.map((item: any, index:number) => {
                return (
                  <div className="navbar-lan-item" key={index} onClick={() => {
                    router.push(`/#${index}`)
                    // window.scrollTo(window.scrollX, window.screenY - 120)
                  }}>
                    <div className="navbar-img-cont">{icons[item.icoId]}</div>
                    {item.btitleru}
                  </div>
                )
            })}
        </div>}
    </>
  )
}

export default BlocksDropdown