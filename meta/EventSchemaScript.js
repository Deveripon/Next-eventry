const EventSchemaScript = ({ event }) => {
    const eventName = encodeURIComponent(event?.name);
    const formattedEventData = {
        "@context": "https://schema.org",
        "@type": "Educational Event",
        name: eventName,
        startDate: new Date(),
        endDate: new Date(),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        location: {
            "@type": "Place",
            name: event?.location,
        },
        image: [event?.imageUrl],
        description: event?.details,

        performer: {
            "@type": "PerformingGroup",
            name: "Kira and Morrison",
        },
        organizer: {
            "@type": "Organization",
            name: "devripon",
            url: "https://github.com/deveripon",
        },
    };
    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(formattedEventData),
                }}
            />
        </>
    );
};

export default EventSchemaScript;

