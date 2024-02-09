import Image from "next/image";
import icon_mobile from "@/assets/images/illustration-sign-up-mobile.svg";
import checkmark from "@/assets/images/icon-list.svg";

export default function Home() {
  return (
    <>
      <section className="md:w-[500px]">
        <div>
          <Image
            src={icon_mobile}
            height={250}
            width={768}
            alt="Illustration"
          />
        </div>
        <div className="py-8 px-4">
          <h1 className="text-slate-900 font-bold text-3xl lg:text-5xl mb-8">
            Stay updated!
          </h1>
          <p className="mb-8">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="flex flex-col gap-4 mb-8">
            <li className="flex gap-4 items-start">
              <Image
                src={checkmark}
                width={"20px"}
                height={"20px"}
                alt="checkmark"
              />
              Product management best practices and strategies.
            </li>
            <li className="flex gap-4 items-start ">
              <Image
                src={checkmark}
                width={"20px"}
                height={"20px"}
                alt="checkmark"
              />
              Measuring to ensure updates are a success
            </li>
            <li className="flex gap-4 items-start">
              <Image
                src={checkmark}
                width={"20px"}
                height={"20px"}
                alt="checkmark"
              />
              And much more!
            </li>
          </ul>

          <form autoComplete="off">
            <label
              className="block text-slate-900 font-bold text-sm mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="email@company.com"
              className="w-full border rounded-lg py-4 px-6 mb-4 outline-none focus:border-my_Charcoal_Grey"
            />
            <button
              className="bg-my_Dark_Slate_Grey text-my_White w-full py-4 px-4 rounded-lg font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-600 hover:opacity-90 "
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
