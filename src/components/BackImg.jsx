import Header from "./Header";

export default function BackImg(props) {
  return (
    <section>
      <Header />
      <img src={props.background} alt="" />
    </section>
  );
}
