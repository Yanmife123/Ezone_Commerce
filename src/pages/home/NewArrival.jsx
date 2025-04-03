import { Link } from "react-router-dom";
import { SalesHeader } from "../../components";
import { Images } from "../../constant";

const NewArrival = () => {
  return (
    <section className="paddingY">
      <div className="flex justify-between items-end">
        <SalesHeader title={`Featured`} headText={`New Arrival`} />
      </div>
      <div className=" mt-5 grid grid-cols-2 gap-5 ">
        <div className=" row-span-2 ">
          <Link to={""}>
            <img
              src={Images.Playstation_Banner}
              alt="playsattion banner"
              className="object-cover w-full"
            />
          </Link>
        </div>
        <div>
          <Link to={""}>
            <img
              src={Images.Wommen_collection_Banner}
              alt="women collection banner "
              className="object-cover w-full"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Link to={""}>
              <img
                src={Images.Speaker_Banner}
                alt="speacker banner"
                className="object-cover w-full"
              />
            </Link>
          </div>
          <div>
            <Link to={""}>
              <img
                src={Images.Gucci_Bag_Banner}
                alt="Guccin bag banner"
                className="object-cover w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
