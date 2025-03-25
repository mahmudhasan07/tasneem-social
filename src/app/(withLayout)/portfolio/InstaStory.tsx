import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import { Navigation, Pagination} from 'swiper/modules';
import { useEffect } from 'react';
import Aos from 'aos';

export default function InstaStory() {
  useEffect(() => {
    Aos.init({
        duration: 400,
        once: true,
    });

}, []);
  return (
    <div>
      <div className="text-center py-14">
        <h2 className="text-[48px] font-bold">Instagram Story Examples</h2>
        <p className="text-[#344054] text-lg pb-10">
          Elevate your brand with our Instagram Stories: 24-hour glimpses that engage, connect, and convert. Perfect for
          showcasing your brand&lsquo;s dynamic side, our Stories blend authentic connection with strategic action, ensuring you
          stay top of mind. Available as an add-on to any plan, let&lsquo;s make your brand unforgettable.
        </p>
      </div>
      
      <div className="lg:px-0 px-3 max-w-[1100px] mx-auto">
        <Swiper
        data-aos="fade-up"
          modules={[Navigation, Pagination]}
          spaceBetween={10} // Space between slides
          slidesPerView={4} // How many slides to show at once
          navigation // Optional: enables next/prev navigation
          pagination={{ clickable: true }} // Optional: pagination with clickable dots
          breakpoints={{
            1024: {
              slidesPerView: 4, // Show 4 slides on larger screens
            },
            768: {
              slidesPerView: 2, // Show 2 slides on medium screens
            },
            480: {
              slidesPerView: 1, // Show 1 slide on small screens
            },
          }}
        >
          <SwiperSlide>
            <Image src="/images/imgslide.png" width={212} height={501} alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/slide2.png" width={212} height={501} alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/slide3.png" width={212} height={501} alt="slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/slide4.png" width={212} height={501} alt="slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/imgslide.png" width={212} height={501} alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/slide2.png" width={212} height={501} alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/slide3.png" width={212} height={501} alt="slide 3" />
          </SwiperSlide>
        
        </Swiper>
      </div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(0, 0, 0, 0.5); /* Set your background color */
          padding: 10px;
          border-radius: 50%;
          color: white;
        }

        /* You can also add hover effects */
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.7); /* Darken on hover */
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px; /* Adjust arrow size */
        }
      `}</style>
    </div>
  );
}
