import TestimoniCarousel from "../../../components/testimoni/TestimoniCarousel";

const TestimoniSection = () => {
  return(
    <div className="bg-white">
      <div>
        <div className="w-full lg:w-[60%] mx-auto mb-8">
          <h2 className="title-1 text-primary-500">Kata Mereka</h2>
        </div>
        <div className="px-4 md:px-16 lg:px-24 py-12">
          <TestimoniCarousel />
        </div>
      </div>
    </div>
  );
}

export default TestimoniSection;