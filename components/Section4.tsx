// app/components/CardSection.tsx

const cards = [
    {
        image: "/sec_3/img1.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
        image: "/sec_3/img2.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
        image: "/sec_3/img3.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
        image: "/sec_3/img4.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
];

export default function Section4() {
    return (
        <section className="py-16 px-4 lg:px-24 relative h-auto">
            <p className="text-md text-[color:var(--color-primary)] font-bold uppercase">Lorem ipsum dolor sit amet</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">LOREM IPSUM DOLOR SIT</h2>
            <p className="text-[#222222] mb-6 text-base w-full md:w-[50%]">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>

            <div className=" rounded-lg  flex justify-center">
                <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-12">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden mb-10">
                            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-2">{card.title}</h3>
                                <p className="text-sm text-gray-700 mb-4 ">{card.description}</p>
                                <a href="#" className="text-blue-600  text-sm font-semibold border-b-2 border-b-blue-600 ">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
