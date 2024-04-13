import { Radar } from "lucide-react";

interface TechnologiesProps {
  icon: JSX.Element;
  name: string;
}

const TechnologiesList: TechnologiesProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Django",
  },
  {
    icon: <Radar size={34} />,
    name: "DRE",
  },
  {
    icon: <Radar size={34} />,
    name: "React",
  },
  {
    icon: <Radar size={34} />,
    name: "Nuclio",
  },
  {
    icon: <Radar size={34} />,
    name: "Datamuro",
  },
  {
    icon: <Radar size={34} />,
    name: "Azure",
  },
  {
    icon: <Radar size={34} />,
    name: "ShadCn",
  },
];

export default function Technologies() {
  return (
    <section id="Technologies" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Built with
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {TechnologiesList.map(({ icon, name }: TechnologiesProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
