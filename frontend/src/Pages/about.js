import React from "react";
import { Globe2, Users, Award, Timer } from "lucide-react";

function AboutUs() {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="relative w-full h-[400px] bg-[#C41230] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3"
                        alt=""
                        className="object-cover w-full h-full opacity-20"
                    />
                </div>
                <div className="relative z-10 text-center text-white">

                    <h1 className="mb-4 text-5xl font-bold">Our Story</h1>
                    <p className="text-xl">Serving the World's Best Chicken Since 1940</p>
                </div>

            </div>
            <div className="max-w-6xl px-4 py-16 mx-auto">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold">The Colonel's Legacy</h2>
                        <p className="mb-4 text-gray-600">
                            Colonel Harland Sanders' journey began in 1930 at a humble service
                            station in Corbin, Kentucky, where his cooking skills made him a
                            local legend. His secret blend of 11 herbs and spices would go on
                            to become one of the world's best-kept recipes.
                        </p>
                        <p className="text-gray-600">
                            Today, KFC continues to follow the Colonel's tradition of
                            hand-breading chicken fresh throughout the day, just as he did
                            more than 80 years ago.
                        </p>
                    </div>
                    <div className="relative h-[400px]">
                        <img
                            src="https://i.postimg.cc/CMRf39Xh/Sad-KFC.webp"
                            alt="Colonel Sanders"
                            className="object-cover w-full h-full rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <StatsCard
                            icon={<Globe2 size={32} />}
                            number="145+"
                            text="Countries"
                        />
                        <StatsCard
                            icon={<Users size={32} />}
                            number="800K+"
                            text="Employees"
                        />
                        <StatsCard
                            icon={<Award size={32} />}
                            number="11"
                            text="Herbs & Spices"
                        />
                        <StatsCard
                            icon={<Timer size={32} />}
                            number="80+"
                            text="Years of Service"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-6xl px-4 py-16 mx-auto">
                <h2 className="mb-12 text-3xl font-bold text-center">Our Values</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <ValueCard
                        title="Quality"
                        description="We maintain the highest standards in food preparation and service."
                    />
                    <ValueCard
                        title="Innovation"
                        description="While honoring our heritage, we continuously evolve to meet changing tastes."
                    />
                    <ValueCard
                        title="Community"
                        description="We're proud to be part of communities worldwide, serving and giving back."
                    />
                </div>
            </div>

        </div>
    );
}
function StatsCard({
    icon,
    number,
    text,
}

) {
    return (
        <div className="text-center">
            <div className="text-[#C41230] mb-4 flex justify-center">{icon}</div>
            <div className="mb-2 text-3xl font-bold">{number}</div>
            <div className="text-gray-600">{text}</div>
        </div>
    );
}
function ValueCard({
    title,
    description,
}) {
    return (
        <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export default AboutUs;