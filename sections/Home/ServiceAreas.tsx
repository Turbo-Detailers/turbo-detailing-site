import ContentSection from "../../components/ContentSection";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import serviceMap from "../../public/images/service-area-map.jpg";
import Link from "next/link";
import Spacer from "../../components/Spacer";

function ServiceAreas() {
  return (
    // <section className="why-us">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div className="why-us__img">
    //           <img src="img/why-us.png" alt="" />
    //         </div>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="why-us__text">
    //           <div className="section-title">
    //             <h2>Why Choose Us</h2>
    //           </div>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
    //             ipsum suspendisse ultrices gravida. Risus commodo viverra
    //             maecenas accumsan lacus vel facilisis.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <div
        className={"flex-row-responsive mt-3 lg:mt-0"}
        style={{
          width: "100%",
          backgroundColor: "#1a1a1a",
          maxWidth: "100vw",
        }}
      >
        <div style={{ marginTop: "1rem" }}>
          <Balancer>
            <ContentSection
              text="We proudly serve the West-Metro area of the Twin Cities, including Chanhassen, Maple Grove, Wayzata, Minnetonka, Shakopee, Eden Prairie, Prior Lake and more!"
              //   title="Why Turbo?"
              image="/images/home/2.png"
              imageAlt="none"
              isBackgroundImage={false}
            />
          </Balancer>
        </div>

        <Spacer height={1} />
        <Link href={`/gallery/images/service-area-map.jpg`}>
          <Image
            src={serviceMap}
            alt={"Service Areas Map"}
            quality={100}
            style={{ width: "100%", objectFit: "contain", height: "100%" }}
          />
        </Link>
      </div>
    </>
  );
}

export default ServiceAreas;
