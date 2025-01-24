import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const EventsCarousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="flex justify-center items-center my-auto">
      <Slider
        {...settings}
        className="flex justify-center items-center mb-20 w-3/4 max-w-7xl mx-auto"
      >
        {data.events.map((event, index) => (
          <div
            key={index}
            className="rounded-xl h-20 sm:h-40 w-44 flex justify-center items-center mr-5 px-2"
          >
            <img
              src={event.image}
              alt={event.title || `Event ${index + 1}`}
              className="rounded-lg m-auto h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const data = {
  events: [
    {
      title: "Event 1",
      description: "Description of event 1",
      date: "2021-08-01",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/66702b7e001e32c971ed/files/66afdda4003a4405feb1/view?project=house-arena-react-vite",
    },
    {
      title: "Event 2",
      description: "Description of event 2",
      date: "2021-08-02",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/66702b7e001e32c971ed/files/66afdd970034de206a79/view?project=house-arena-react-vite",
    },
    {
      title: "Event 3",
      description: "Description of event 3",
      date: "2021-08-03",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/66702b7e001e32c971ed/files/66afdd530012310b3502/view?project=house-arena-react-vite",
    },
    {
      title: "Event 4",
      description: "Description of event 1",
      date: "2021-08-01",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/66702b7e001e32c971ed/files/66afdd3c000d7190d838/view?project=house-arena-react-vite",
    },
    {
      title: "Event 5",
      description: "Description of event 2",
      date: "2021-08-02",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/66702b7e001e32c971ed/files/66afdd2d0002e8038023/view?project=house-arena-react-vite",
    },
    {
      title: "Event 6",
      description: "Description of event 3",
      date: "2021-08-03",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/66702b7e001e32c971ed/files/66afdd1b00141ec3e041/view?project=house-arena-react-vite",
    },
    {
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/66702b7e001e32c971ed/files/66afdd090019085fe04e/view?project=house-arena-react-vite",
    },
    {
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/66702b7e001e32c971ed/files/66afdcea000d02586164/view?project=house-arena-react-vite",
    },
  ],
};

export default EventsCarousel;