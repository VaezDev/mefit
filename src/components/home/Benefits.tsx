import { BoltIcon, CheckIcon, StarIcon, TruckIcon } from "@/components/icons";

const benefits = [
  {
    icon: StarIcon,
    title: "DISEÑO QUE ESTILIZA",
    text: "Cortes que realzan tu figura y se adaptan a tu cuerpo.",
  },
  {
    icon: CheckIcon,
    title: "COMODIDAD TOTAL",
    text: "Tejidos suaves y elásticos para moverte sin límites.",
  },
  {
    icon: BoltIcon,
    title: "VERSATILIDAD DIARIA",
    text: "Perfectos para entrenar o para tu día a día.",
  },
  {
    icon: TruckIcon,
    title: "ENVÍOS A TODA COLOMBIA",
    text: "Recibe tu pedido donde estés, rápido y seguro.",
  },
];

export default function Benefits() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map(({ icon: Icon, title, text }) => (
        <div key={title} className="space-y-3 text-center">
          <Icon className="mx-auto text-brand" width={30} height={30} />
          <h3 className="text-sm font-bold tracking-wide">{title}</h3>
          <p className="text-sm text-neutral-600">{text}</p>
        </div>
      ))}
    </div>
  );
}
