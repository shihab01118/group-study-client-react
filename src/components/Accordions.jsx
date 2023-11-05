import { useEffect, useState } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"

const Accordions = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div data-aos="fade-up" className="collapse collapse-arrow bg-base-200" key={item.id}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            {item.heading}
          </div>
          <div className="collapse-content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordions;
