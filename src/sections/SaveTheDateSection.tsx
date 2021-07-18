import moment from "moment";
import { useEffect, useState } from "react";
import data from "../data";
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed, days }: {hours: any, minutes: any, seconds: any, completed: any, days: any}) => {
 return (
        <div className="flex w-full justify-around">
                <div data-aos="fade-right" className="flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{days}</span>
                    <span className="text-sm">Days</span>
                </div>
                
                <div data-aos="fade-down" className="flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{hours}</span>
                    <span className="text-sm">Hours</span>
                </div>

                <div data-aos="fade-up" className="flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{minutes}</span>
                    <span className="text-sm">Minutes</span>
                </div>

                <div data-aos="fade-left" className="flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{seconds}</span>
                    <span className="text-sm">Seconds</span>
                </div>
            </div>
    )
};

function SaveTheDateSection() {
const date = new Date("2021-07-23T07:30:51.01");
    return (
        <div className="px-4 py-8 text-center relative">
         <div className="w-full zzz" style={{
            backgroundImage: "url('/images/wave2.webp')",
            height: '80px',
            backgroundSize: 'cover',
            transform: 'rotate(180deg)',
              backgroundPosition: 'bottom',
              position: 'absolute',
              top: '0',
              left: '0'
          }}></div>
            <h1 data-aos="fade-up" className="primary-font text-4xl mt-20 font-black">Save The Date</h1>
            <h1 data-aos="fade-up" className="text-2xl">{moment(data.wedding_date).format('dddd, MMMM DD YYYY').toUpperCase()}</h1>
            <h1 data-aos="fade-up" className="text-2xl">{moment(data.wedding_date).format('HH:mm').toUpperCase()} WITA</h1>
            <img src="/images/divider.png" className="w-full mt-5"/>

            <Countdown
    date={date.getTime()}
    renderer={renderer}
  />

        </div>
    )
}

export default SaveTheDateSection;