import moment from "moment";
import { useEffect, useState } from "react";
import data from "../data";

function SaveTheDateSection() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function countdown() {
        var countDownDate = new Date(data.wedding_date).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
                
            }
        }, 1000);
    }

    useEffect(() => {
        countdown();
    }, [days, hours, minutes, seconds]);

    return (
        <div className="px-4 py-8 text-center">
            <h1 className="primary-font text-4xl">Save The Date</h1>
            <h1 className="text-2xl">{moment(data.wedding_date).format('dddd, MMMM DD, YYYY').toUpperCase()}</h1>
            <h1 className="text-2xl">{moment(data.wedding_date).format('HH:mm').toUpperCase()}</h1>
            <img src="/images/divider.png" className="w-full mt-5"/>

            <div className="flex w-full justify-around">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{days}</span>
                    <span className="text-sm">Days</span>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{hours}</span>
                    <span className="text-sm">Hours</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{minutes}</span>
                    <span className="text-sm">Minutes</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{seconds}</span>
                    <span className="text-sm">Seconds</span>
                </div>
            </div>

            <div className="mt-10">
                <button className="border-2 border-black rounded bg-transparent py-2 px-4 font-semibold">Add To Calendar</button>
            </div>
        </div>
    )
}

export default SaveTheDateSection;