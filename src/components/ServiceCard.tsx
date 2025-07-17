import { Link } from 'react-router-dom';

interface Props {
  title: string;
  desc: string;
  icon?: string;
  href: string;
}

export default function ServiceCard({ title, desc, icon, href }: Props) {
  return (
    <Link to={href} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      {icon && <img src={icon} alt="" className="h-10 mb-4" />}
      <h3 className="text-lg font-semibold text-navy-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </Link>
  );
}
