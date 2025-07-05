

export const CarCard = (props) => {
  // console.log("Props", props.carData);
  const { prices, tripName, tripType } = props.carData;
  const { sedanPrice, suvPrice } = props.carData.prices;
  // console.log("price", prices);

  return (
    <div className="bg-gray-50 border-1 border-slate-700  p-2.5 rounded-2xl">
      <h3 className="route text-3xl text-center h-20 font-medium text-orange-600">
        {tripName}
      </h3>
      <img src="https://neminathtravels.com/static/media/dzire.1717c8d947aaa6b26e1b.png" />
      <h4 className="way text-2xl text-center">{tripType}</h4>
      <div className="flex justify-around">
       
        <div className=" w-30 h-15 rounded-2xl bg-white-500 border-2 text-center mt-9 p-1 flex-col">
          <div>Sedan</div>
          <div>{sedanPrice}</div>
        </div>
        <div className=" w-30 h-15 rounded-2xl bg-white-500 border-2 text-center mt-9 p-1 flex-col">
          <div>Suv</div>
          <div>{suvPrice}</div>
        </div>
       
      </div>
      <button className=" rounded-4xl w-full p-2 mt-15  bg-orange-600">
        Book Now
      </button>
    </div>
  );
};
