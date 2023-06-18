import React from "react";
import Image from "next/image";

type props = {

}

function About({ }: props) {
 return (
    <section className="bg-black  flex flex-col justify-center items-end px-10" id="about">
        <h1 className="text-white text-5xl lg:text-6xl text-right mb-8">Who are we?</h1>
        {/* break text if it gets too long  */}
        <p className="text-white text-2xl lg:text-3xl text-right max-w-lg font-semibold leading-relaxed">
            We are a group of students passionate about space and technology.
        </p>

    </section>
 )
}

export default About


