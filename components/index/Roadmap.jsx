export default function Roadmap() {
  return (
    <div
      className="h-fit p-10 md:p-20"
      style={{ backgroundColor: "#122620" }}
      id="roadmap"
    >
      <div className="flex flex-wrap justify-center">
        <strong className="text-white text-3xl sm:text-5xl text-center basis-full pb-10">
          ROADMAP
        </strong>
        <div className="flex items-center">
          <img
            src="/assets/roadmap.png"
            className="object-contain img-float"
            alt="Card"
          />
        </div>
      </div>
    </div>
  );
}