import React from 'react';
import Quote from '../../assets/icons/quote.svg';
import Avatar1 from '../../assets/images/people1.png';
import Avatar2 from '../../assets/images/people2.png';
import Avatar3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      content: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      avatar: Avatar1,
      name: "Winson Herry",
      location: "California"
    },
    {
      _id: 2,
      content: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      avatar: Avatar2,
      name: "Winson Herry",
      location: "California"
    },
    {
      _id: 3,
      content: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      avatar: Avatar3,
      name: "Winson Herry",
      location: "California"
    },
  ]
  return (
    <div className="my-20 px-12">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-primary">Testimonial</h2>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-24 lg:w-44" src={Quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 px-12">
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </div>
  );
};

export default Testimonials;