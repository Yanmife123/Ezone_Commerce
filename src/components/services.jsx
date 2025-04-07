import { data } from "../constant";

const ServiceData = ({ icon, title, note }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <div className="p-3 rounded-full bg-grey">
          <div className="p-2 rounded-full bg-black">
            <img src={icon} alt="service Icon" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-black font-poppins text-lg font-semibold text-center">
          {title}
        </h3>
        <p className="mt-3 text-black text-sm font-poppins text-center">
          {note}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="paddingY">
      <div className="flex flex-wrap gap-[60px] justify-center h-auto">
        {data.Services.map((service) => (
          <ServiceData key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
