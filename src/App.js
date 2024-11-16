import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails.jsx";
import Project from "./pages/Project.jsx";
import PlanWithProject from "./pages/PlanWithProject.jsx";

function App() {
  const services = [
    {
      id: 1,
      image: "/assets/service/Interior Painting Service.jpg",
      title: "Interior Painting Service",
      description:
        "Our interior painting service is designed to bring a refreshing and transformative experience to your living or working spaces. Interior walls often set the tone for the mood and functionality of a room. Our team of skilled professionals is dedicated to making your interiors truly stand out with high-quality finishes and vibrant colors that suit your personality and preferences. We begin by understanding your vision, whether you want a cozy, warm ambiance or a sleek, modern look. Once the color palette is decided, we prepare the surfaces meticulously by cleaning, sanding, and priming to ensure the paint adheres perfectly. This process minimizes imperfections and ensures a smooth, even finish. We use only top-tier paints and materials that are safe, eco-friendly, and long-lasting. Throughout the project, our team pays close attention to detail, from sharp edges to clean corners, ensuring the best results. We respect your time and space, working efficiently and tidying up thoroughly once the job is done. With years of expertise, we guarantee a seamless process and stunning results that breathe new life into your interiors. Whether it’s a single room or an entire building, our interior painting service is tailored to exceed your expectations.",
      shortDescription: "Professional interior painting to refresh your space.",
    },
    {
      id: 2,
      image: "/assets/service/Exterior Painting Service.webp",
      title: "Exterior Painting Service",
      description:
        "Our exterior painting service is all about enhancing the curb appeal and longevity of your property. The exterior of your home or business is the first thing people notice, making it essential to create a great impression. Our expert team specializes in providing weather-resistant, durable, and visually striking painting solutions. We start by conducting a thorough inspection of the exterior surfaces, identifying areas that may require repairs such as cracks or peeling paint. After preparing the surface, we apply high-quality primers and paints designed to withstand harsh environmental conditions like rain, UV rays, and temperature changes. The paints we use not only provide aesthetic value but also act as a protective shield, preventing damage from moisture, mold, and mildew. With a vast array of colors and finishes available, you can choose a style that complements your architectural design. Whether you own a small residence or a large commercial building, our services are tailored to meet your needs. Our professional painters ensure clean lines, even application, and attention to every detail, leaving your property looking stunning and well-maintained. Trust us to deliver exceptional results that combine beauty and durability, making your property stand out in the neighborhood.",
      shortDescription: "Durable, weather-resistant exterior painting.",
    },
    {
      id: 3,
      image: "/assets/service/Commercial Painting Service.jpeg",
      title: "Commercial Painting Service",
      description:
        "A professionally painted commercial space speaks volumes about your business. Our commercial painting service is designed to create an inviting and professional atmosphere that reflects your brand values. We work closely with business owners to understand their requirements, offering tailored solutions for offices, retail stores, restaurants, and more. Our team of skilled painters is experienced in handling projects of varying scales, ensuring minimal disruption to your business operations. We prioritize surface preparation, repairing imperfections and using high-quality paints that provide a lasting finish. From bold, vibrant colors to subtle, sophisticated tones, we offer a range of options to suit your brand's identity. Safety and efficiency are at the core of our process, and we ensure all projects are completed within the agreed timeframe and budget. The end result is a clean, polished, and professional look that enhances your space's functionality and appeal. Whether you are renovating an existing space or starting fresh, our commercial painting service is your go-to solution for creating an environment that leaves a lasting impression on clients and employees alike.",
      shortDescription: "Enhance your commercial space professionally.",
    },
    {
      id: 4,
      image: "/assets/service/Residential Painting Service .jpg",
      title: "Residential Painting Service",
      description:
        "Your home is your sanctuary, and our residential painting service is here to make it truly yours. We understand that every homeowner has a unique vision for their space, and our goal is to bring that vision to life. Whether you want to refresh a single room or repaint your entire house, we offer personalized solutions tailored to your preferences. Our process starts with a consultation where we discuss your ideas, color schemes, and finishes. We then prepare the surfaces by filling cracks, sanding, and priming to ensure a flawless result. Using premium paints and materials, we guarantee a long-lasting finish that enhances the beauty and value of your home. Our skilled painters work efficiently and with precision, paying attention to every detail to achieve clean lines and even coverage. Post-painting, we handle all cleanup, leaving your space spotless and ready to enjoy. From modern minimalist designs to classic, timeless aesthetics, our residential painting service delivers quality and satisfaction. Let us help you create a vibrant, welcoming space you can be proud of.",
      shortDescription: "Personalized residential painting solutions.",
    },
    {
      id: 5,
      image: "/assets/service/Rental Home Flats Painting Service.webp",
      title: "Rental Home Flats Painting Service",
      description:
        "Preparing a rental property for new tenants can be a challenging task, but our rental home flats painting service makes it easy and affordable. We specialize in providing quick, efficient, and budget-friendly painting solutions that refresh and enhance your property's appearance. Whether you’re a landlord looking to attract tenants or a tenant preparing to leave, our team ensures a hassle-free experience. We use durable, low-maintenance paints that can withstand the wear and tear of rental living. Our process involves thorough surface preparation, including repairing minor damages and applying primer to ensure even coverage. With a variety of neutral and modern color options, we help you create a clean and appealing look that appeals to a wide range of tenants. Our efficient team ensures the job is completed on time, minimizing vacancy periods and maximizing your rental income potential. With our rental home flats painting service, you can rest assured that your property will be move-in ready in no time.",
      shortDescription: "Affordable painting for rental properties.",
    },
    {
      id: 6,
      image: "/assets/service/Apartment Painting Service.jpeg",
      title: "Apartment Painting Service",
      description:
        "Our apartment painting service is tailored to meet the unique requirements of apartment spaces, whether you are a landlord, tenant, or homeowner. Apartments often have specific layouts and design constraints that require a thoughtful and professional approach. Our team of experts understands the nuances of painting apartments, from managing tight spaces to selecting the right colors that make your interiors appear spacious and inviting. We begin with a consultation to understand your vision and offer suggestions that align with your preferences and the existing decor. Surface preparation is a key focus, ensuring walls are smooth and free from imperfections before applying any paint. Using high-quality, durable paints, we create a finish that withstands daily wear and tear while maintaining its aesthetic appeal. Our efficient workflow minimizes disruption to your daily routine, and we adhere to strict timelines to complete the project on schedule. Whether you want to refresh a single room or transform the entire apartment, our service guarantees exceptional results. From contemporary themes to classic styles, we can achieve the look you desire, adding value to your apartment and making it a place you’ll love to call home.",
      shortDescription: "Tailored painting for apartments.",
    },
    {
      id: 7,
      image: "/assets/service/Villa Painting Service.jpeg",
      title: "Villa Painting Service",
      description:
        "Our villa painting service is designed for those who seek luxurious and personalized solutions for their grand homes. Villas often represent a blend of elegance, space, and architectural uniqueness, requiring a high level of expertise to enhance their appeal. We provide a comprehensive painting solution that caters to both the interiors and exteriors of your villa, using premium-quality paints and materials. Our process starts with an in-depth consultation to understand your preferences and style. We offer a wide range of color palettes, finishes, and techniques to complement the luxurious ambiance of your villa. Our team meticulously prepares the surfaces, addressing any cracks, dampness, or imperfections to ensure a flawless outcome. For exterior painting, we use weather-resistant paints that provide long-lasting protection against the elements while maintaining a vibrant appearance. Interior painting focuses on creating an atmosphere of sophistication and comfort, with attention to every detail, including trims, moldings, and ceilings. We also prioritize cleanliness and minimal disruption during the project, leaving your villa pristine and ready for you to enjoy. Trust our villa painting service to bring out the best in your home and reflect your refined taste.",
      shortDescription: "Luxurious villa painting services.",
    },
    {
      id: 8,
      image: "/assets/service/Bunglow Painting Service.webp",
      title: "Bungalow Painting Service",
      description:
        "Our bungalow painting service offers premium solutions tailored to enhance the grandeur and charm of large, unique properties. Bungalows often feature intricate architectural details and expansive spaces, requiring a specialized approach to painting. Our experienced team is well-equipped to handle the complexities of bungalow projects, ensuring exceptional results that highlight the beauty of your property. We provide end-to-end painting services, covering both interior and exterior surfaces. For interiors, we focus on creating a harmonious color scheme that complements your decor while providing a warm and inviting atmosphere. Exterior painting emphasizes durability and protection, using high-quality, weather-resistant paints that withstand the test of time. Our process includes thorough surface preparation, from cleaning and repairing to priming, ensuring a flawless and long-lasting finish. We also pay close attention to decorative elements, such as wooden panels, railings, and stone surfaces, enhancing their visual appeal. With a focus on precision, quality, and customer satisfaction, our bungalow painting service transforms your property into a stunning masterpiece. Whether you’re looking to refresh your home or prepare it for sale, we deliver results that exceed expectations.",
      shortDescription: "Grand painting for bungalows.",
    },
    {
      id: 9,
      image: "/assets/service/Enamal Painting Service.png",
      title: "Enamel Painting Service",
      description:
        "Our enamel painting service is perfect for those looking to achieve a smooth, glossy, and durable finish on metal and wood surfaces. Enamel paints are renowned for their resilience, making them an ideal choice for areas exposed to frequent use or harsh conditions. Whether you need to paint doors, windows, furniture, or decorative pieces, our team of professionals delivers flawless results that enhance the beauty and longevity of your items. We begin by preparing the surfaces, ensuring they are clean, sanded, and primed to allow the enamel paint to adhere properly. Using high-quality enamel paints, we create a finish that resists scratches, stains, and fading, even under heavy use. The application process involves precision and care, achieving an even coat that brings out the vibrant colors and glossy texture. Our enamel painting service is not limited to interiors; we also cater to exterior projects, such as railings, gates, and outdoor furniture, using weather-resistant enamel paints. With attention to detail and a commitment to quality, we ensure a professional and polished look that lasts for years. Choose our enamel painting service to add a touch of elegance and durability to your spaces.",
      shortDescription: "Smooth and glossy enamel painting.",
    },
    {
      id: 10,
      image: "/assets/service/Asian Paints Painting Service.webp",
      title: "Asian Paints Painting Service",
      description:
        "As authorized service providers for Asian Paints, we offer superior painting solutions that combine quality, vibrancy, and innovation. Asian Paints is a trusted name in the industry, known for its wide range of high-performance paints and colors. Our service is designed to bring these exceptional products to your home or business, ensuring a perfect finish every time. We provide a comprehensive consultation to help you select the right shades and finishes that match your style and preferences. Our team of professionals is trained to apply Asian Paints products with precision, achieving a flawless result that enhances the beauty and durability of your spaces. From washable emulsions for interiors to weatherproof coatings for exteriors, we cater to diverse needs with the latest in paint technology. Our process includes surface preparation, application, and finishing touches, ensuring a seamless and long-lasting outcome. Whether you’re looking to refresh a single room or transform an entire building, our Asian Paints painting service delivers unmatched quality and satisfaction. Trust us to bring your vision to life with vibrant colors and impeccable craftsmanship.",
      shortDescription: "Official Asian Paints service.",
    },
    {
      id: 11,
      image: "/assets/service/Interior Wall Painting Service.jpg",
      title: "Interior Wall Painting Service",
      description:
        "Our interior wall painting service focuses on transforming your walls into stunning visual elements that enhance the overall ambiance of your rooms. Walls are the canvas of your home or office, and the right paint can make a significant difference. We offer a variety of colors, textures, and finishes to suit every style and preference. Our process begins with a consultation to understand your requirements and recommend options that complement your decor. Surface preparation is critical, and we take care to fill cracks, sand uneven areas, and apply primer for a smooth base. Using high-quality, eco-friendly paints, we ensure vibrant and long-lasting results. Our skilled painters work meticulously, paying attention to details such as edges, trims, and corners to achieve a polished look. Whether you prefer bold, dramatic colors or soft, soothing tones, we can create the perfect backdrop for your space. From single accent walls to entire rooms, our service is tailored to meet your needs and exceed your expectations. Let us help you create walls that inspire and delight.",
      shortDescription: "Transform your walls with perfect finishes.",
    },
    {
      id: 12,
      image: "/assets/service/House Painting Service.jpg",
      title: "House Painting Service",
      description:
        "Our house painting service offers a complete solution for transforming your home, both inside and out. We understand that your house is more than just a structure; it’s a reflection of your personality and lifestyle. Our team is committed to delivering exceptional results that enhance the beauty, comfort, and value of your home. For interiors, we focus on creating a cohesive color scheme that complements your furnishings and decor while addressing specific needs such as washable surfaces or low-VOC options for better air quality. Exterior painting emphasizes durability and curb appeal, using weather-resistant paints that protect your home from the elements. Our process includes thorough preparation, from repairing imperfections to priming surfaces, ensuring a flawless and long-lasting finish. We offer a wide range of colors, textures, and finishes to suit your style, whether you prefer classic, contemporary, or eclectic designs. With attention to detail, skilled craftsmanship, and a commitment to customer satisfaction, our house painting service is the perfect choice for homeowners looking to refresh and revitalize their spaces. Trust us to make your house feel like a true home.",
      shortDescription: "Complete house painting solutions.",
    },
  ];
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/servicedetails/:id"
            element={<ServiceDetails services={services} />}
          />
          <Route path="/projects" element={<Project />} />
          <Route path="/plan-with-project" element={<PlanWithProject />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
