import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import AccentedTitle from "../components/titles/AccentedTitle";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

function ExoticInquiries() {
  return (
    <>
      <Head>
        <title>Exotics - Turbo Detailers</title>
        <meta
          name="description"
          content="Send us an inquiry for your exotic vehicles. If you have any questions about our detailing services, feel free to reach out to us using our form! We detail and provide detailing services in the Greater Twin Cities and Minneapolis area: Chaska, Chanhassen, Eden Prairie, Plymouth, Minnetonka, Wayzata, and more!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Spacer height={1.75} />

        <AccentedTitle>Inquiries</AccentedTitle>
        <Spacer height={3} />

        <ContactForm />
        <Spacer height={2} />

        <section className="mb-32">
          <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-900">
            <p className="pt-6 px-3">
              Having trouble reaching us or have a specific request? You can
              also use the contact details below.
            </p>
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full shrink-0 grow-0 basis-auto llg:w-6/12 lxl:w-8/12">
                <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 llg:pt-0">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 llg:w-full xl:w-6/12 lxl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-white">Call</p>
                        <Link
                          className="text-neutral-200"
                          href={"tel:9524575638"}
                        >
                          +1 (952) 457-5638
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 llg:w-full xl:mb-0 lxl:w-6/12 xl:px-12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-white">Email</p>
                        <Link
                          href={
                            "mailto:contact@turbodetailers.com?subject=Contact%20Request%20-%20Turbo%20Detailers"
                          }
                          className="text-neutral-200"
                        >
                          contact@turbodetailers.com
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 llg:w-full lxl:w-6/12 lxl:px-12"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ExoticInquiries;
