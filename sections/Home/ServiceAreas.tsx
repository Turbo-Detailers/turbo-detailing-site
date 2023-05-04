import ContentSection from "../../components/ContentSection";

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
    <ContentSection
      text="We provide services throughout the West-Metro of the Twin Cities area. This includes Chanhassen, Maple Grove, Wayzata, Minnetonka, Shakopee, and more! Please note that we only detail SUVs and Sedans"
      //   title="Why Turbo?"
      image="/images/home/2.png"
      imageAlt="none"
      isBackgroundImage={false}
    />
  );
}

export default ServiceAreas;
