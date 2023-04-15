import React from "react";
import ActionButton from "../components/buttons/ActionButton";

function about() {
  return (
    <>
      <div className="container ">
        <h2
          style={{
            textAlign: "center",
            padding: 20,
          }}
        >
          About Us
        </h2>
        <p>
          We are Pakistan-based company that specializes in the production of
          knives, surgical instruments, and cutlery items. Our company is
          located in Wazirabad, a city that has earned the nickname City of
          Knives due to its long-standing history of producing high-quality
          blades. At our company, we take pride in our craftsmanship and use
          only the highest quality materials to create our products. Our knives
          are made using traditional techniques that have been passed down from
          generation to generation, ensuring that each blade is crafted with the
          utmost care and attention to detail. In addition to knives, we also
          produce a wide range of surgical instruments and cutlery items,
          including scalpels, forceps, spoons, and forks. Our products are used
          by professionals in a variety of fields, including medicine, food
          service, and outdoor recreation. At our company, we are committed to
          providing our customers with the best possible products and services.
          We understand that a knife or surgical instrument is more than just a
          tool; it is an extension of the person using it. That is why we take
          great care in ensuring that each of our products is crafted to the
          highest standards of quality and durability. We believe that our
          commitment to quality and customer service sets us apart from other
          companies in the industry. Whether you are a professional chef or a
          hobbyist, we have the perfect knife or cutlery item to suit your
          needs. Thank you for considering our company for your knife and
          cutlery needs. We look forward to providing you with the best possible
          products and services.
        </p>
        <div
          style={{
            textAlign: "center",
            padding: 20,
            marginTop: 40,
          }}
        >
          <ActionButton text="back to main page" link="/" />
        </div>
      </div>
    </>
  );
}

export default about;
