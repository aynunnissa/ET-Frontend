import GrowthItem from "../../../components/growth/GrowthItem";
import SectionLayout from "../../../components/layout/Layout/SectionLayout";
import { GROWTH_ITEM } from "./constants";

const GrowthSection = () => {
  return(
    <SectionLayout>
      <div>
        <div className="w-full lg:w-[50%] mx-auto">
          <h2 className="title-1 text-primary-500">Menuju Ekosistem yang Lebih Kuat Bersama Eratani</h2>
        </div>
        <div className="w-full md:w-2/3 mx-auto mt-12">
          <div className="flex justify-center mb-8 md:mb-16">
            {GROWTH_ITEM.slice(0, 2).map((item) => (
              <div key={item.title} className="w-1/3">
                <GrowthItem 
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {GROWTH_ITEM.slice(2, 5).map((item) => (
              <div key={item.title} className="w-1/3">
                <GrowthItem 
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default GrowthSection;