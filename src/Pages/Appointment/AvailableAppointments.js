import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../SharedPages/Spinner";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
	const [bookNow, setBookNow] = useState(null);
	const formattedDate = format(date, "PP");

  const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
	  .then(res => res.json())
  )

  if (isLoading) {
    return <Spinner></Spinner>
  }

	return (
		<div className="lg:py-20 my-12 lg:my-14">
			<h2 className="text-xl text-primary text-center">
				Available Appointments on {format(date, "PP")}
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-5 lg:my-14">
				{
        services?.map((service) => 
					<Service
						key={service._id}
						service={service}
						setBookNow={setBookNow}
					></Service>)
        }
			</div>
			{bookNow && (
				<BookingModal
					date={date}
					bookNow={bookNow}
					setBookNow={setBookNow}
          refetch={refetch}
				></BookingModal>
			)}
		</div>
	);
};

export default AvailableAppointments;
