import CoreValueItem from "../../../components/core-values/Item";
import SectionLayout from "../../../components/layout/Layout/SectionLayout";
import { VALUE_ITEMS } from "./constants";

const CoreValues = () => {
  return(
    <SectionLayout>
      <div className="w-full lg:w-[60%] mx-auto">
        <h2 className="title-1 text-primary-500">Peduli Petani Bersama Eratani</h2>
      </div>
      <div className="flex flex-col gap-4 mt-12">
        {VALUE_ITEMS.map(value => (
          <div key={value.title} className="w-full">
            <CoreValueItem 
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default CoreValues;