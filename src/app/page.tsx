import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaFlag, FaHeart, FaStar, FaWallet } from "react-icons/fa";
import { bestMatchData } from "../../data/bestMatch";
import { TiTick } from "react-icons/ti";


export default function Home() {

  return (

    <><h1 className="font-bold">Best Match</h1>
      {bestMatchData.map((object, index) => <div key={index} className="mt-10 hover:shadow-xl transition duration-300 rounded-2xl">
        <div className="border border-gray-300 flex">

          <div className="size-96 overflow-hidden relative">
            <Image
              src={object.imageSrc}
              alt="Trip Image"
              fill
              className="object-cover"
            />

            <div className="absolute  right-2 top-2 w-10 h-10 bg-black/50 rounded-full flex justify-center items-center cursor-pointer">
              <FaHeart className="text-white " />
            </div>
          </div>




          <div className="w-full py-5 px-5">
            <div className="flex">
              <div className="basis-full">
                <p className="font-bold text-2xl">{object.information.heading}</p>
                <p>{object.information.description}</p>

                <div className="activities text-blue-500 flex text-center mt-4 gap-3">

                  {object.information.activities.map((activity, index) =>
                    <p key={index} className=" bg-blue-200 w-fit rounded-md px-3">{activity}</p>
                  )}
                </div>

                <div className="destinationCircle flex mt-5 gap-3">

                  <div className="circle">
                    <p className="w-4 h-4 border rounded-full "></p>
                    <p className="border-l-2 border-dashed border-gray-800 h-8 ml-1.5"></p>
                    <p className="w-4 h-4 border bg-black rounded-full "></p>
                  </div>
                  <div className="destination">
                    <p className="pb-4">{object.information.fromLocation}</p>
                    <p>{object.information.toLocation}</p>
                  </div>

                </div>

                <div className="datePriceTrip flex gap-15 mt-4">
                  <p className="flex items-center gap-2"> <CiCalendarDate />{object.information.date}</p>
                  <p className="flex items-center gap-2"> <FaWallet />	&#8377;{object.information.pricePerPerson} / person</p>
                  <p className="flex items-center gap-2"><FaFlag />{object.information.count} Trips Completed</p>
                </div>
              </div>
              <div className="flex text-center gap-4 h-auto">
                <p className="bg-green-500 h-10 w-30 text-white font-bold rounded-4xl pt-2">{object.information.matchPercentage}% Match</p>
                <p className="bg-red-500 h-10 w-30 text-white font-bold rounded-4xl pt-2">{object.information.spotsAvailable} Spots left</p>

              </div>
            </div>
            <hr className="my-4" />

            <div className="flex  items-center">
              <div className="userProfile flex gap-4 items-center basis-1/2">

                <div className="profilePic text-white size-13 text-2xl font-bold bg-blue-500 rounded-full flex justify-center items-center">
                  <p>SJ</p>
                </div>

                <div className="namePlaceName">
                  <div className="flex gap-1.5 items-center">
                    <p className="name font-bold">Sarah Johnson,</p>
                    <p className="age font-bold">18</p>
                    <div className="bg-green-400 flex h-5 w-5 justify-center items-center rounded-full text-white">
                      <TiTick />
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <p className="stateName">Goa,</p>
                    <p className="countryName">India.</p>
                    <FaStar className="text-amber-400" />
                  </div>


                  <div className="flex gap-4 mt-2">
                    <p className=" bg-blue-100 rounded-lg px-2 text-blue-500 font-semibold">Travel Enthusiast</p>
                    <p className="border-2 border-green-300 bg-green-100 rounded-lg px-2 text-green-600 font-semibold">90% Safe</p>
                  </div>
                </div>
              </div>

              <div className="basis-1/2 gap-4 flex">
              <button className="px-3 py-1 bg-green-950 text-white h-fit cursor-pointer">View Trip</button>
              <button className="px-3 py-1 bg-green-950 text-white h-fit cursor-pointer">Join Trip</button>
              <button className="px-3 py-1 bg-green-950 text-white h-fit cursor-pointer">View Profile</button>
              </div>
            </div>

          </div>


        </div>

      </div>
      )}
    </>

  )
}
