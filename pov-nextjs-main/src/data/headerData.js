import logo from "../../public/assets/images/logo-light.png";

const headerData = {
  logo,
  navData: [
    {
      id: 1,
      href: "#home",
      name: "Home",
    },
    {
      id: 2,
      href: "#services",
      name: "Services",
    },
    {
      id: 3,
      href: "#testimonials",
      name: "Testimonials",
    },
    {
      id: 4,
      href: "#pricing",
      name: "About us",
    },
    {
      id: 5,
      href: "#blog",
      name: "Blog",
      subItems: [
        {
          id: 1,
          href: "/blog",
          name: "Blog Style 01",
        },
        {
          id: 2,
          href: "/blog-details",
          name: "Blog Details",
        },
      ],
    },
    {
      id: 6,
      href: "#contact",
      name: "Contact us",
    },
  ],
};

export default headerData;
