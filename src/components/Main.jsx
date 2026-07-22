import image2 from "../assets/China.jpg";
import travelData from "./Data";

function Main() {
  /* Commented out the hardcoded version:
  return (
    <article>
      <div>
        <img src={image2} alt="Chinna" />
        <div>
          <a href="https://www.britannica.com/topic/Great-Wall-of-China" />
          <h1>Great Wall of China</h1>
          <p>Auguest 2022</p>
          <p>
            Great Wall of China, extensive bulwark erected in ancient China, one
            of the largest building-construction projects ever undertaken. The
            Great Wall actually consists of numerous walls—many of them parallel
            to each other—built over some two millennia across northern China
            and southern Mongolia.
          </p>
        </div>
      </div>
    </article>
  );
  */
  return (
    <article>
      {travelData.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <div>
            <a href={item.Url}>view Location Info</a>

            <h1>{item.title}</h1>
            <p>{item.date}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </article>
  )
}
export default Main;
