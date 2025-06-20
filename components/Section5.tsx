"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Section5() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
    };

    return (
        <section className="max-w-5xl h-auto mx-auto px-4 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
                REQUEST A QUOTE
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"

                            {...register("name")}
                            className="w-full border border-gray-300 p-3 rounded-md bg-gray-100"
                        />
                    </div>



                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            E-mail
                        </label>
                        <input
                            type="email"

                            {...register("email")}
                            className="w-full border border-gray-300 p-3 rounded-md bg-gray-100"
                        />
                    </div>



                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"

                            {...register("phone")}
                            className="w-full border border-gray-300 p-3 rounded-md bg-gray-100"
                        />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Time Frame
                        </label>
                        <select
                            {...register("timeFrame", { required: true })}
                            className="w-full border border-gray-300 p-3 rounded-md bg-gray-100"
                        >
                            <option value="">Choose Time Frame</option>
                            <option value="1-2 weeks">1-2 Weeks</option>
                            <option value="1 month">1 Month</option>
                            <option value="More than 1 month">More than 1 Month</option>
                        </select>
                        {errors.timeFrame && (
                            <p className="text-red-500 text-sm">This field is required</p>
                        )}
                    </div>



                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Size
                        </label>
                        <select
                            {...register("size", { required: true })}
                            className="w-full border border-gray-300 p-3 rounded-md bg-gray-100"
                        >
                            <option value="" >Choose Size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        {errors.size && (
                            <p className="text-red-500 text-sm">This field is required</p>
                        )}
                    </div>



                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Quantity
                        </label>
                        <select
                            {...register("quantity", { required: true })}
                            className="w-full border border-gray-300 p-3 rounded-md bg-gray-100"
                        >
                            <option value="">Choose Quantity</option>
                            <option value="1-10">1-10</option>
                            <option value="10-50">10-50</option>
                            <option value="50+">50+</option>
                        </select>
                        {errors.quantity && (
                            <p className="text-red-500 text-sm">This field is required</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Please Describe Your Project
                    </label>
                    <textarea
                        rows={6}
                        placeholder="Please Describe Your Project"
                        {...register("description", { required: true })}
                        className="w-full border border-gray-300 p-3 rounded-md bg-gray-100"
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                            This field is required
                        </p>
                    )}
                </div>

                <p className="text-sm text-center text-gray-600">
                    By submitting this form you agree to our{" "}
                    <a href="#" className="underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                        Privacy Policy
                    </a>
                    .
                </p>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold shadow-lg transition-all"
                    >
                        Lorem Ipsum <Image src="/right.png" alt="Arrow Right" width={100} height={100} className="inline-block w-6 h-4 ml-2" />
                    </button>
                </div>
            </form>
        </section>
    );
}
