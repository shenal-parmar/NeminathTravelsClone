import { CarBanner } from "./CarBanner"
import { CarDetail } from "./CarDetail"
import { TempleImageComp } from "./TempleImageComp"


export const AvailableCars = () => {
  return (
    <div>
        <TempleImageComp img="https://res.cloudinary.com/dagd6qt6p/image/upload/v1735630771/neminathimg1_axl1q9.jpg" statement="Available Cars"/>
        <CarDetail/>
        <CarBanner/>
    </div>
  )
}
