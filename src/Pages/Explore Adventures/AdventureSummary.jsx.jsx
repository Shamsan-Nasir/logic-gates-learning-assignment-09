import React from 'react';
import { MapPin, Clock, Users, CircleDollarSign } from 'lucide-react';
import { useNavigate } from 'react-router';

const AdventureSummary = ({ adventure }) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=> navigate(`/adventureDetails/${adventure.id}`)} className="overflow-hidden rounded-2xl border border-compass-sage/30 bg-compass-sand shadow-md hover:shadow-xl cursor-pointer flex flex-col">

            {/* Image */}
            <div className="relative h-56">
                <img
                    src={adventure.image}
                    alt={adventure.adventureTitle}
                    className="h-full w-full object-cover"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-compass-forest px-3 py-1 text-xs font-medium text-white">
                    {adventure.categoryName}
                </span>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white">
                        {adventure.adventureTitle}
                    </h2>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1">

                {/* Description */}
                <p className="mb-5 text-sm leading-6 text-compass-stone/80">
                    {adventure.shortDescription}
                </p>

                {/* Quick Information */}
                <div className="grid grid-cols-2 gap-3">

                    <div className="flex items-center gap-3 rounded-xl bg-compass-mist p-3">
                        <MapPin className="h-5 w-5 text-compass-teal" />

                        <div>
                            <p className="text-xs text-compass-stone/60">
                                Location
                            </p>
                            <p className="text-sm font-semibold text-compass-stone">
                                {adventure.location}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-compass-mist p-3">
                        <Clock className="h-5 w-5 text-compass-teal" />

                        <div>
                            <p className="text-xs text-compass-stone/60">
                                Duration
                            </p>
                            <p className="text-sm font-semibold text-compass-stone">
                                {adventure.duration}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-compass-mist p-3">
                        <Users className="h-5 w-5 text-compass-teal" />

                        <div>
                            <p className="text-xs text-compass-stone/60">
                                Group Size
                            </p>
                            <p className="text-sm font-semibold text-compass-stone">
                                Up to {adventure.maxGroupSize}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-compass-mist p-3">
                        <CircleDollarSign className="h-5 w-5 text-compass-teal" />

                        <div>
                            <p className="text-xs text-compass-stone/60">
                                Cost
                            </p>
                            <p className="text-sm font-semibold text-compass-stone">
                                ৳{adventure.adventureCost.toLocaleString()}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Information */}
                <div className="mt-5 flex items-center justify-between border-t border-compass-sage/30 pt-4">

                    <div>
                        <span className="text-xs text-compass-stone/60">
                            Difficulty
                        </span>

                        <p className="font-semibold text-compass-forest">
                            {adventure.adventureLevel}
                        </p>
                    </div>

                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${adventure.bookingAvailability === "Available"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                    >
                        {adventure.bookingAvailability}
                    </span>

                </div>

            </div>
        </div>
    );
};

export default AdventureSummary;